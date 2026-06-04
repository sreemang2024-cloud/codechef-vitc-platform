import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-2xl tracking-tighter text-gray-900 dark:text-white mb-4 inline-block">
              CodeChef<span className="text-blue-600 dark:text-blue-500"> VITC</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6">
              The premier community for student developers, designers, and tech enthusiasts. Build the future with us.
            </p>
            <a href="mailto:hello@codechefvitc.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              hello@codechefvitc.com
            </a>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/#events" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">All Events</Link></li>
              <li><Link href="/#about" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About the Club</Link></li>
              <li><Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Member Guidelines</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Socials</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.instagram.com/codechef.vitc/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/codechef-vitcc-6496b1280/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} CodeChef VIT Chennai. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-400 dark:text-gray-500">
            <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}