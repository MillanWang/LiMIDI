import { Carousel } from 'antd';

function App() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-8 text-center">
        <h1 className="text-5xl font-bold mb-8 drop-shadow-lg gradient-text">Limidi Website</h1>
        <Carousel autoplay className="my-8 rounded-lg overflow-hidden shadow-lg">
          <div>
            <div className="h-96 text-white flex items-center justify-center text-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600">
              <div>
                <h2 className="text-4xl font-bold mb-5">Welcome to Limidi</h2>
                <p className="text-lg mt-5">Your journey starts here</p>
              </div>
            </div>
          </div>
          <div>
            <div className="h-96 text-white flex items-center justify-center text-2xl bg-gradient-to-br from-pink-400 via-red-500 to-pink-600">
              <div>
                <h2 className="text-4xl font-bold mb-5">Discover New Experiences</h2>
                <p className="text-lg mt-5">Explore what we have to offer</p>
              </div>
            </div>
          </div>
          <div>
            <div className="h-96 text-white flex items-center justify-center text-2xl bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600">
              <div>
                <h2 className="text-4xl font-bold mb-5">Join Our Community</h2>
                <p className="text-lg mt-5">Connect with like-minded people</p>
              </div>
            </div>
          </div>
          <div>
            <div className="h-96 text-white flex items-center justify-center text-2xl bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500">
              <div>
                <h2 className="text-4xl font-bold mb-5">Innovation at Its Best</h2>
                <p className="text-lg mt-5">Cutting-edge solutions for modern needs</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default App
