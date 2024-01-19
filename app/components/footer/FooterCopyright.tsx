import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="text-gray-700">
    © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
    <a href="https://creativedesignsguru.com" className="text-primary-500 hover:underline">CreativeDesignsGuru</a>.
    {/*
     * PLEASE READ THIS SECTION
     * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
     * The link doesn't need to appear on every pages, one link on one page is enough.
     * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
     */}
  </div>
);

export { FooterCopyright };
