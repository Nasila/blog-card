import image from './img/spacejoy-YqFz7UMm8qE-unsplash.jpg';
function App() {
  return (

    <>
      <div className="mt-[120px] w-[340px] mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800">
          <img className="rounded-t-lg" src={image} alt="Interior design" />
        <div className="p-5">
          <div className="w-16 mb-2 px-2 py-0.5 bg-green-50 border text-sm font-normal border-green-200 rounded-full text-green-700">Interior</div>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-grey">Top 5 living room inspirations.</h5>
          </a>
          <p className="mb-3 font-normal text-gray-900 dark:text-gray-600">Curated vibrant colors for your living, make it pop and calm in the same time.

          </p>
          <a href="#" className="inline-flex items-center text-blue-600 text-sm font-medium text-center">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="#3D6DEB" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
