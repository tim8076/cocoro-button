import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import SearchArea from "./components/SearchArea";
import "./assets/scss/all.scss";
import voiceData from "./data/voice.json";
function App() {
  
  function playAudio(path) {
    const audioPlayer = document.createElement('audio');
    audioPlayer.src = path;
    console.dir(audioPlayer);
    audioPlayer.play();
  }

  return (
    <>
      <TheHeader />
      <div className="cocoro-bg">
        <main className="main-body">
          <section className="py-3 pt-md-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <SearchArea voiceData={voiceData}
                    playAudio={playAudio}/>
                </div>
              </div>
              {voiceData.map((data) => {
                return (
                  <div className="card shadow-sm rounded-4 mb-3" key={data.type}>
                    <div className="card-body p-md-4">
                      <h2 className="fs-5 fs-md-4 mb-3">{data.title}</h2>
                      <div className="row g-2">
                        {data.voice.map((voice) => {
                          return (
                            <div className="col-auto" key={voice.title}>
                              <button className="btn btn-primary-100 text-light rounded-pill"
                                onClick={() => playAudio(voice.path)}>
                                {voice.title}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
      <TheFooter />
    </>
  );
}

export default App;
