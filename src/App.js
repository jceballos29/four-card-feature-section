import "./App.css";
import FeatureCard from "./components/FeatureCard";

import features from "./utils/features";

function App() {
    return (
        <main className="App">
            <div className="container">
                <h1 className="app__title">
                    Reliable, efficient delivery
                    <br />
                    <span>Powered by Technology</span>
                </h1>
                <p className="app__description">
                    Our Artificial Intelligence powered tools use millions of
                    project data points to ensure that your project is
                    successful
                </p>
                <div className="app__content">
                    <div className="app__content__column_1">
                        <FeatureCard
                            key={features[0].id}
                            color={features[0].color}
                            image={features[0].image}
                            title={features[0].title}
                            description={features[0].description}
                        />
                    </div>
                    <div className="app__content__column_2">
                        <FeatureCard
                            key={features[1].id}
                            color={features[1].color}
                            image={features[1].image}
                            title={features[1].title}
                            description={features[1].description}
                        />
                        <FeatureCard
                            key={features[2].id}
                            color={features[2].color}
                            image={features[2].image}
                            title={features[2].title}
                            description={features[2].description}
                        />
                    </div>
                    <div className="app__content__column_3">
                        <FeatureCard
                            key={features[3].id}
                            color={features[3].color}
                            image={features[3].image}
                            title={features[3].title}
                            description={features[3].description}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
