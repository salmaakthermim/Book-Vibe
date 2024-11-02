import bannerImg from '../../assets/book.jfif'

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-3xl lg:p-20">
        <div className="hero-content flex-col gap-40 lg:flex-row-reverse">
        <div>
        <img
            src={bannerImg}
            className="w-80" />
        </div>
          <div >
            <h1 className="text-5xl mb-10 ">Books to freshen up <br /> your bookshelf</h1>
           
            <button className="btn btn-success">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;