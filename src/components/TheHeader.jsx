import mainLogo from "../assets/images/main-logo.jpg";
export default function TheHeader() {
  return (
    <header className="header position-sticky top-0 start-0 z-3">
      <nav className="navbar navbar-expand-lg bg-primary-100">
        <div className="container">
          <a
            className="header__logo navbar-brand d-flex align-items-center"
            href="#"
          >
            <img src={mainLogo} alt="main-logo" className="me-2" />
            <h1 className="fs-5 fs-md-4 mb-0 text-light">心 cocor0 按鈕</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link fs-3 text-light d-flex align-items-center"
                  href="https://www.youtube.com/@cocor0_0303"
                  target="_blank"
                >
                  <i className="bi bi-youtube me-2"></i>
                  <span className="fs-5 d-lg-none">Youtube</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fs-3 text-light d-flex align-items-center"
                  href="https://www.twitch.tv/cocor0_0303"
                  target="_blank"
                >
                  <i className="bi bi-twitch me-2"></i>
                  <span className="fs-5 d-lg-none">Twitch</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fs-3 text-light d-flex align-items-center"
                  href="https://x.com/cocor0_0303"
                  target="_blank"
                >
                  <i className="bi bi-twitter-x me-2"></i>
                  <span className="fs-5 d-lg-none">Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
