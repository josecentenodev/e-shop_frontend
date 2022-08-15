import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-white dark:bg-gray-800 w-full py-6 bottom-0 fixed">
    <div class="max-w-screen-xl mx-auto px-4">
        <ul class="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-center">
            <li class="my-2 mx-8">
                <a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    Github
                </a>
            </li>
            <li class="my-2 mx-8">
                <a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    LinkedIn
                </a>
            </li>
        </ul>
    </div>
    <div class="text-center text-gray-500 pt-5 font-light flex items-center justify-center">
                Created by Jose Centeno
            </div>
</footer>
  )
}
