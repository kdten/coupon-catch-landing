import Image from 'next/image'

export default function HeroIllustration() {

  return (
    <Image
      src='/phoneHero.5scale.png'
      width={664}
      height={769}
      alt="Picture of app on phone"
    />

  )
}
