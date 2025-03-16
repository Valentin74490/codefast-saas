const ListItems = ({text}) => {
  return (
    <li className="flex gap-2 items-center mt-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-secondary size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              {text}
            </li>
  )
}

export default ListItems
