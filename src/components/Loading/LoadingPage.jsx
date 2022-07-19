import loading from '../../assets/loading/loading.gif'

const LoadingPage = () => {

    return (
        <div className="fixed top-0 bottom-0 right-0 left-0 z-40 bg-black/40 flex items-center flex-col justify-center">
            <img src={loading} alt="" className='w-[150px] h-[150px] z-40'/>
        </div>
    )
}

export default LoadingPage