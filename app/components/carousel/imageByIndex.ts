const image1 = '/images/isapres/banmedica.png'
const image2 = '/images/isapres/colmena.png'
const image3 = '/images/isapres/consalud.png'
const image4 = '/images/isapres/cruz-blanca.png'
const image6 = '/images/isapres/vida-tres.png'
const image5 = '/images/isapres/mas-vida.png'

export const images: string[] = [image1, image2, image3, image4, image5, image6]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
