import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// Utiliza la desestructuración para extraer métodos específicos de NextResponse
const { json } = NextResponse;

// Asumiendo que este endpoint solo manejará peticiones GET
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const idnoticia = url.pathname.split('/').pop(); // O alguna lógica similar que refleje tu estructura de ruta
  try {
    const prisma = new PrismaClient();
    const article = await prisma.article.findUnique({
      where: { idnoticia: idnoticia }}, // Asegúrate de que la propiedad se llame igual que en tu modelo Prisma
    );

    if( article){
    const content = await prisma.content_elements.findMany({
      where: { article_id: article.id },
      orderBy: { content_order: 'asc'}}, // Asegúrate de que la propiedad se llame igual que en tu modelo Prisma
    );
    const fullArticle = { titles: article , content: content}
    // Envía la respuesta como JSON con un estado 200
    return json({ data: fullArticle }, {
      status: 200,
    })}
  } catch (error) {
    console.error(error);
    // Manejo de errores con un estado 500
    return json({ error: 'Internal Server Error' }, {
      status: 500,
    });
  }
}
