export default function Casestudy({ svg, title, header, subtitle, colored }) {
  return (
    <div className="xs:mx-1">
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-red-500 shadow-md">
        <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr  from-indigo-500  to-red-500 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
          {svg}
        </div>
        <div className="p-4 text-right">
          <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
            {title}
          </p>
          <h4 className="block antialiased font-sans text-2xl leading-normal font-bold text-blue-gray-900">
            {header}
          </h4>
        </div>
        <div className="border-t border-blue-gray-50 p-4">
          <p className="block antialiased font-sans text-black leading-relaxed font-bold text-blue-gray-600">{subtitle}<br />
            <strong className="text-indigo-500">{colored}</strong>
          </p>
        </div>
      </div>
    </div>
  );

}