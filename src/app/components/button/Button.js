export default function Button({ children, className }) {
  return (
    <button
      className={`"text-white font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2  transition duration-200 ease-in-out" ${className}`}
    >
      {children}
    </button>
  )
}