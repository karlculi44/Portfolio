import { ArrowUpRight, Hammer } from "lucide-react";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Github, X } from "lucide-react";

const repositoryUrl = "https://github.com/karlculi44/ClassFlow";
const classFlowImages = [
  "Login.webp",
  "Admin_Dashboard.webp",
  "Admin_Classes.webp",
  "Admin_Assignment_Graded.webp",
];

const imagePath = (fileName) =>
  `${import.meta.env.BASE_URL}projects/classflow/${encodeURIComponent(fileName)}`;

function CarouselButton({ direction, onClick }) {
  const isPrevious = direction === "previous";
  const Icon = isPrevious ? ArrowLeft : ArrowRight;

  return (
    <button
      type="button"
      className="carousel-button"
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      aria-label={`${isPrevious ? "Previous" : "Next"} ClassFlow image`}
    >
      <Icon size={16} />
    </button>
  );
}

function ClassFlowCard() {
  const [currentImage, setCurrentImage] = useState(0);
  const [modalImage, setModalImage] = useState(null);
  const [carouselReset, setCarouselReset] = useState(0);

  const goToImage = (offset) => {
    setCurrentImage(
      (index) =>
        (index + offset + classFlowImages.length) % classFlowImages.length,
    );
    setCarouselReset((value) => value + 1);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImage((index) => (index + 1) % classFlowImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [carouselReset]);

  useEffect(() => {
    if (modalImage === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setModalImage(null);
      if (event.key === "ArrowLeft") {
        setModalImage(
          (index) =>
            (index - 1 + classFlowImages.length) % classFlowImages.length,
        );
      }
      if (event.key === "ArrowRight") {
        setModalImage((index) => (index + 1) % classFlowImages.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalImage]);

  return (
    <>
      <article
        className="project-card classflow-card"
        onClick={() => setModalImage(currentImage)}
      >
        <div
          className="project-image-wrap"
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setModalImage(currentImage);
            }
          }}
          aria-label="Open ClassFlow project screenshots"
        >
          <div
            className="project-image-track"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {classFlowImages.map((fileName) => (
              <img
                key={fileName}
                src={imagePath(fileName)}
                alt={`ClassFlow ${fileName.replaceAll("_", " ").replace(".webp", "")}`}
              />
            ))}
          </div>
          <div className="project-carousel-controls">
            <CarouselButton
              direction="previous"
              onClick={() => goToImage(-1)}
            />
            <span className="project-image-count mono">
              {String(currentImage + 1).padStart(2, "0")} /{" "}
              {String(classFlowImages.length).padStart(2, "0")}
            </span>
            <CarouselButton direction="next" onClick={() => goToImage(1)} />
          </div>
        </div>
        <div className="project-body">
          <div className="project-card-heading">
            <div>
              <span className="project-index">PROJECT_01</span>
              <h3>ClassFlow</h3>
            </div>
          </div>
          <p>
            A classroom management platform with admin dashboards for
            assignments, classes, and recordings.
          </p>
          <div className="project-tags">
            <span>React</span>
            <span>Full-stack</span>
          </div>
          <div className="project-actions">
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
              onClick={(event) => event.stopPropagation()}
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
              onClick={(event) => event.stopPropagation()}
            >
              Live demo <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </article>

      {modalImage !== null && (
        <div
          className="project-modal"
          role="presentation"
          onClick={() => setModalImage(null)}
        >
          <div
            className="project-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label="ClassFlow project screenshots"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="project-modal-header">
              <span className="mono">CLASSFLOW / SCREENSHOTS</span>
              <button
                type="button"
                className="icon-button"
                onClick={() => setModalImage(null)}
                aria-label="Close screenshots"
              >
                <X size={18} />
              </button>
            </div>
            <div className="project-modal-image-wrap">
              <img
                src={imagePath(classFlowImages[modalImage])}
                alt={`ClassFlow screenshot ${modalImage + 1}`}
              />
              <button
                type="button"
                className="modal-carousel-button modal-carousel-previous"
                onClick={() =>
                  setModalImage(
                    (index) =>
                      (index - 1 + classFlowImages.length) %
                      classFlowImages.length,
                  )
                }
                aria-label="Previous ClassFlow screenshot"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                type="button"
                className="modal-carousel-button modal-carousel-next"
                onClick={() =>
                  setModalImage((index) => (index + 1) % classFlowImages.length)
                }
                aria-label="Next ClassFlow screenshot"
              >
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="project-modal-footer">
              <span>{classFlowImages[modalImage].replaceAll("_", " ")}</span>
              <span className="mono">
                {modalImage + 1} / {classFlowImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function PlaceholderCard({ number }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-index">PROJECT_{number}</span>
        <Hammer className="project-icon" size={24} />
      </div>
      <div className="project-body">
        <h3>Coming soon</h3>
        <p>
          This project is under development. New work will appear here as it
          becomes ready to share.
        </p>
        <div className="project-foot">
          <span className="mono">IN DEVELOPMENT</span>
          <ArrowUpRight size={16} />
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell projects-section">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <div className="eyebrow">03 / selected work</div>
            <h2>Projects</h2>
          </div>
          <p>
            Works are in progress. The next build is taking shape, one
            thoughtful interaction at a time.
          </p>
        </div>
        <div className="project-grid">
          <ClassFlowCard />
          <PlaceholderCard number="02" />
          <PlaceholderCard number="03" />
        </div>
      </div>
    </section>
  );
}
