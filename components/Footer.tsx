"use client"
export default function Footer() {
  return (
    <footer className=" text-white p-4 text-center mt-10">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="https://github.com/mauroociappinaph" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/maurojoseciappina/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
