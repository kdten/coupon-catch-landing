 import Image from 'next/image'

  export default function Logo({ ...rest }) {
  
    return (
      <Image
        src='/v3.png'
        width={260}
        height={120}
        alt="Picture of app on phone"
      />
  
    )
  }
