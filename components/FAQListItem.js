"use client";
import { useState } from "react"

const FAQListItem = ({ qa }) => {

  const [isOpen, setIsOpen] = useState(false)

  return <li key={qa.question}>
          {/* 1.Question clicable */}
          <button className="py-5 font-semibold border-b w-full text-left flex items-center justify-between" onClick={() => {setIsOpen(!isOpen)}}>
              <p> {qa.question}</p>
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
              clipRule="evenodd" />
              </svg>

              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" clipRule="evenodd" />
              </svg> )
              }

          </button>

          {/* 1.Answer */}
          {
            isOpen ? <div>{qa.answer}</div> : <></>
          }
        </li>
}

export default FAQListItem
