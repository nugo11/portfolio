import priceshub from "../../../public/projects/priceshub.webp";
import products from "../../../public/projects/products.webp";
import moviesapp from "../../../public/projects/movies-app.webp";
import designo from "../../../public/projects/designo.webp";

export default function Projects() {
  return (
    <div className="Psection" id="projects">
      <div className="projects">
        <div className="item">
          <a href="https://priceshub.ge" target="_blank">
            <img src={priceshub} alt="priceshub" />
            <h2>საწვავის ფასების ანალიტიკის პლათფორმა Priceshub.ge</h2>
            <ul>
              <li>html</li>
              <li>css</li>
              <li>nextJS</li>
            </ul>
          </a>
        </div>
        <div className="item">
          <a href="https://products-page-cyan.vercel.app/" target="_blank">
            <img src={products} alt="online store" />
            <h2>ონლაინ მაღაზია</h2>
            <ul>
              <li>html</li>
              <li>css</li>
              <li>nextJS</li>
            </ul>
          </a>
        </div>
        <div className="item">
          <a href="https://movies-app-mu-three.vercel.app/" target="_blank">
            <img src={moviesapp} alt="movies app" />
            <h2>ფილმების აპლიკაცია ავტორიზაციით</h2>
            <ul>
              <li>html</li>
              <li>css</li>
              <li>nextJS</li>
            </ul>
          </a>
        </div>
        <div className="item">
          <a href="https://designo-snowy.vercel.app/" target="_blank">
            <img src={designo} alt="designo" />
            <h2>ფილმების აპლიკაცია ავტორიზაციით</h2>
            <ul>
              <li>html</li>
              <li>css</li>
              <li>nextJS</li>
            </ul>
          </a>
        </div>
      </div>
    </div>
  );
}
