import Image from "next/image"

const WIDTH = 4532.1 / 10
const HEIGHT = 3121.6 / 10
const Logos = () => {
  return (
    <div className="bg-gradient-to-b from-gray-500 to-gray-900  flex flex-col p-4 gap-10">
      <div className="flex-1 min-w-full gap-10">
        <div>
          <h1 className="text-3xl">Logo oficial</h1>
          <p className="text-sm">Haz click en logo para descargar.</p>
        </div>
        <a
          download={officialLogo.fileName}
          href={`/assets/logos/${officialLogo.fileName}`}
        >
          <Image
            src={`/assets/logos/${officialLogo.fileName}`}
            alt={officialLogo.alt}
            width={WIDTH}
            height={HEIGHT}
          />
        </a>
      </div>
      <div className="flex flex-wrap min-w-full gap-10">
        <div>
          <h2 className="text-3xl">Otras variantes del logo</h2>
          <p className="text-sm">
            Haz click en la variante del logo para descargarla.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {fileList.map((file) => (
            <a
              download={file.fileName}
              href={`/assets/logos/${file.fileName}`}
              key={file.id}
            >
              <Image
                src={`/assets/logos/${file.fileName}`}
                alt={file.alt}
                width={WIDTH}
                height={HEIGHT}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Logos

const officialLogo = {
  id: 9,
  fileName: "Logo full color.png",
  alt: "Full Color Logo",
}

const fileList = [
  {
    id: 1,
    fileName: "Logo amarillo 2.png",
    alt: "Amarillo Logo 2",
  },
  {
    id: 2,
    fileName: "Logo amarillo 3.png",
    alt: "Amarillo Logo 3",
  },
  {
    id: 3,
    fileName: "Logo amarillo sin fondo.png",
    alt: "Amarillo Logo sin fondo",
  },
  {
    id: 4,
    fileName: "Logo amarillo.png",
    alt: "Amarillo Logo",
  },
  {
    id: 5,
    fileName: "Logo blanco 2.png",
    alt: "Blanco Logo 2",
  },
  {
    id: 6,
    fileName: "Logo blanco 3.png",
    alt: "Blanco Logo 3",
  },
  {
    id: 7,
    fileName: "Logo blanco sin fondo.png",
    alt: "Blanco Logo sin fondo",
  },
  {
    id: 8,
    fileName: "Logo blanco.png",
    alt: "Blanco Logo",
  },
  {
    id: 10,
    fileName: "Logo morado 2.png",
    alt: "Morado Logo 2",
  },
  {
    id: 11,
    fileName: "Logo morado 3.png",
    alt: "Morado Logo 3",
  },
  {
    id: 12,
    fileName: "Logo morado sin fondo.png",
    alt: "Morado Logo sin fondo",
  },
  {
    id: 13,
    fileName: "Logo morado.png",
    alt: "Morado Logo",
  },
  {
    id: 14,
    fileName: "Logo negro 2.png",
    alt: "Negro Logo 2",
  },
  {
    id: 15,
    fileName: "Logo negro 3.png",
    alt: "Negro Logo 3",
  },
  {
    id: 16,
    fileName: "Logo negro sin fondo.png",
    alt: "Negro Logo sin fondo",
  },
  {
    id: 17,
    fileName: "Logo negro.png",
    alt: "Negro Logo",
  },
  {
    id: 18,
    fileName: "Logo naranjo 2-3.png",
    alt: "Naranjo Logo 2-3",
  },
  {
    id: 19,
    fileName: "Logo naranjo 2.png",
    alt: "Naranjo Logo 2",
  },
  {
    id: 20,
    fileName: "Logo naranjo 4.png",
    alt: "Naranjo Logo 4",
  },
  {
    id: 21,
    fileName: "Logo naranjo.png",
    alt: "Naranjo Logo",
  },
  {
    id: 22,
    fileName: "Logo rosado 2.png",
    alt: "Rosado Logo 2",
  },
  {
    id: 23,
    fileName: "Logo rosado 3.png",
    alt: "Rosado Logo 3",
  },
  {
    id: 24,
    fileName: "Logo rosado sin fondo.png",
    alt: "Rosado Logo sin fondo",
  },
  {
    id: 25,
    fileName: "Logo rosado.png",
    alt: "Rosado Logo",
  },
  {
    id: 26,
    fileName: "logo naranjo 3.png",
    alt: "Naranjo Logo 3",
  },
  {
    id: 27,
    fileName: "Logo naramnjo 2-2.png",
    alt: "Naranjo Logo 2-2",
  },
  {
    id: 28,
    fileName: "Logo naranjo 2 sin fondo.png",
    alt: "Naranjo Logo 2 sin fondo",
  },
]
