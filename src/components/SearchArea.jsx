import { useMemo } from "react";
import { useState } from "react"

export default function SearchArea({ voiceData, playAudio }) {
  const [searchText, setSearchText] = useState('');
  
  const voices = useMemo(() => {
    return voiceData.flatMap(item => {
      return [...item.voice];  // 解構 item.voice 陣列
    });
  }, voiceData);

  const filteredVoices = useMemo(() => {
    return voices.filter(voice => {
      const title = voice.title.toLowerCase();
      const text = searchText.toLowerCase();
      return title.includes(text) && searchText !== '';
    });
  }, [searchText, voices]);
  return (
    <>
      <div className="mb-3">
        <label htmlFor="search-voice"
          className="form-label">搜尋聲音</label>
        <input type="email"
          className="form-control border-primary-100"
          id="search-voice"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="搜尋可可聲音" />
      </div>
      { filteredVoices.length > 0 && (
          <div className="card shadow-sm rounded-4 mb-3">
            <div className="card-body p-md-4">
              <h2 className="fs-5 mb-3">搜尋結果</h2>
              <div className="row g-2">
                {filteredVoices.map((voice) => {
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
        )
      }     
    </>
  )
}
