export const Article = ({ img, number, title, text }) => {
  return (
    <article className='flex h-[162px] md:w-[343px] md:flex-grow'>
        <div className='w-[100px] flex-none'>
            <img src={img} alt="Image Articulo" />
        </div>
        <div className='pl-6 font-bold'>
            <p className='text-GrayishBlue text-3xl mb-[18px]'>{number}</p>
            <h2 className='mb-[18px] hover:text-SoftOrange cursor-pointer'>{title}</h2>
            <p className='text-DarkGrayishBlue text-[14px]'>{text}</p>
        </div>
    </article>
  )
}
