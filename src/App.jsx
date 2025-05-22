import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

const NUM_ROWS = 6;
const NUM_COLS = 7;

const EMPTY_BOARD = () =>
  Array(NUM_ROWS)
    .fill()
    .map(() => Array(NUM_COLS).fill().map(() => [0, 0]));

const heroImages = [
  "/Ramzi_Images/3.jpg", 
  "/Ramzi_Images/1.JPG", 
  "/Ramzi_Images/2.jpg", 
  "/Ramzi_Images/4.JPG", 
  "/Ramzi_Images/5.JPG", 
  "/Ramzi_Images/7.jpeg", 
  "/Ramzi_Images/8.JPG", 
  "/Ramzi_Images/9.JPG",
  "/Ramzi_Images/10.jpeg"
  ];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex flex-col items-center justify-center text-center px-6 py-16 relative overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${heroImages[currentImage]})` }}></div>

      {/* Overlay */}
      <div className="relative z-10 max-w-3xl">


        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hey, I'm Ramzi
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          I'm a data scientist and engineer passionate about applying AI across industries. Explore my work, play Connect Four against my tournament-winning AI, or learn more about my story.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/bio" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition-all duration-200">
            About Me
          </Link>
          <Link to="/play" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition-all duration-200">
            Play Connect Four
          </Link>
          <Link to="/projects" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition-all duration-200">
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

function Bio() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto">
      <Link to="/" className="text-blue-500 underline mb-6 hover:text-blue-700 transition">
        ← Back to Home
      </Link>
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center mb-10">
          <img 
            src="/ramzi.jpg" 
            alt="Ramzi Kattan" 
            className="w-36 h-36 rounded-full shadow-md mb-4 md:mb-0 md:mr-8 object-cover"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">Ramzi Kattan</h1>
            <p className="text-gray-700">
              AI Enthusiast • Aspiring Entrepreneur • Data Scientist • Ex-Aerospace Engineer
            </p>
          </div>
        </div>

        {/* Upbringing Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Upbringing</h2>
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              I was born in Dallas, Texas, where I spent ten years as a proud Carroll Dragon. That’s where I first picked up football—though the red tape on the back of my helmet reminded the quarterback not to give me the ball—and basketball, a sport I’ve stuck with throughout my life. I can’t say I remember much from those early years, but everything began to feel more vivid when my family moved to Riyadh, Saudi Arabia.
            </p>

            <p>
              In Riyadh, I became an American International School of Riyadh Eagle. I dabbled in everything: football (still mediocre), volleyball, tennis—you name it. But what I gained most wasn’t athletic skill; it was perspective. I met people from nearly every corner of the world. That kind of diversity shaped the way I communicate and taught me how to connect with anyone, anywhere.
            </p>

            <p>
              One summer while vacationing in Tripoli, Lebanon—something we did often—my mom casually asked, “Do you like it here?” I said yes. Then she asked, “Would you move here?” I shrugged and said, “I guess.” And just like that, we did.
            </p>

            <p>
              I spent the next five years in Beirut. Lebanon taught me everything I know about resilience. Living through government riots, economic collapse, and the largest non-nuclear explosion in modern history will do that. But despite the instability, I was surrounded by incredible friends and a culture that instilled in me a healthy sense of competition. That environment sparked my drive to excel—especially in math and physics—and eventually led me to the next chapter of my life in West Lafayette, Indiana.
            </p>
          </div>
        </section>

{/* Education Section */}
<section className="mb-10">
  <h2 className="text-xl font-semibold mb-6">Education</h2>

  {/* Purdue University */}
  <div className="mb-6 bg-white p-6 rounded-lg shadow-md flex items-start">
    <img
      src="/purdue.png" // 🔁 Replace with actual logo path
      alt="Purdue Logo"
      className="w-12 h-12 mr-4 object-contain"
    />
    <div>
      <h3 className="text-lg font-bold text-blue-800 mb-1">Purdue University</h3>
      <p className="text-sm text-gray-600 italic mb-2">
        B.S. in Aeronautical and Astronautical Engineering • GPA: 3.67
      </p>
      <p className="space-y-4 text-gray-800 leading-relaxed mb-4">
      At Purdue University, I built a strong foundation in problem-solving and analytical thinking. I specialized in Astrodynamics & Space Applications as well as Propulsion—more of a rocket guy than a plane guy, but above all else, I was a satellite guy. Over time, I realized that while I enjoyed the technical challenges, I wasn’t as deeply passionate about traditional engineering work as some of my peers. That realization inspired me to complement my education with a minor in Business Economics.
      </p>

      <p>
      During my time at Purdue, I served as Vice President of Personnel for the Purdue Student Engineering Foundation, was consistently recognized on the Dean’s Honor List, and was selected to present a final investment recommendation to VU Venture Funds as part of an experiential learning course. Wrapping up my Bachelor's was a major milestone—but I left with a growing curiosity about data science and artificial intelligence, which ultimately led me to pursue a Master’s degree.
      </p>
    </div>
  </div>

  {/* UT Austin */}
  <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
    <img
      src="/utaustin.png" // 🔁 Replace with actual logo path
      alt="UT Austin Logo"
      className="w-12 h-12 mr-4 object-contain"
    />
    <div>
      <h3 className="text-lg font-bold text-orange-800 mb-1">University of Texas at Austin</h3>
      <p className="text-sm text-gray-600 italic mb-2">
        M.S. in Business Analytics • GPA: 3.91
      </p>
      <p className="space-y-4 text-gray-800 leading-relaxed mb-4">
      The desire to strengthen my coding skills, explore artificial intelligence, and bridge the gap between technology and business led me to pursue a Master’s in Business Analytics at the University of Texas at Austin. I can confidently say that choosing UT Austin was one of the best decisions of my life. It aligned my career aspirations with my genuine interests and exposed me to the cutting edge of data science and AI.
      </p>

      <p>
      Through coursework in Optimization, Advanced Machine Learning, Deep Learning, and Generative AI, I gained hands-on experience applying techniques like reinforcement learning, large language models, and diffusion models. Outside the classroom, I briefly led the MS Consulting Community, helping students prepare for consulting case interviews. I also developed several novel projects that extended lessons from class—including a reinforcement learning agent that won first place in a program-wide Connect Four competition.
      </p>
    </div>
  </div>
</section>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 text-center">
      <Link to="/" className="text-blue-500 underline mb-6 hover:text-blue-700 transition">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-12">Projects</h1>

      <div className="w-full max-w-4xl space-y-16 text-left">

        {/* Project Card */}
        <ProjectCard
          title="Connect Four AI Agent"
          description="Built a first-place Connect Four AI that won a program-wide tournament using a hybrid of deep reinforcement learning and search-based techniques. Inspired by AlphaGo Zero, the system combines Monte Carlo Tree Search (MCTS), a Double Deep Q-Network (DDQN), a Policy Gradient model, and a shallow Minimax booster to play against humans in real-time through a custom web app."
          tools="TensorFlow (Keras), NumPy, React + Vite, Flask REST API, Tailwind CSS, Double DQN, Policy Gradient (REINFORCE), MCTS (PUCT), Minimax"
          highlights={[
            "Policy Gradient rollout guidance – Designed and trained a custom REINFORCE-based network to predict action probabilities, replacing random rollouts in MCTS with informed, model-guided simulations.",
            "Double DQN value estimation – Built a Q-network trained on 20,000+ self-play games using experience replay and a target network. The model estimates long-term board value and improves search accuracy.",
            "Monte Carlo Tree Search with Minimax integration – Built a tournament-winning MCTS agent that combines deep learning with classical search. It uses policy priors from a Policy Gradient model and board value estimates from a Double DQN to guide tree expansion. During simulations, each leaf node is evaluated using a weighted blend of the Double DQN’s prediction and a shallow-depth Minimax search. This integration improves long-term planning while adding tactical sharpness to catch short-term traps.",
            "Interactive web interface – Developed a fully featured frontend in React and deployed the system using Docker containers on AWS Lightsail, with a Flask backend serving trained models and handling game logic."
          ]}
          outcome="This agent employed a novel move selection strategy and earned first place among all AI agents developed by students in the UT Austin MSBA program. Unlike the deterministic behavior of the policy gradient and Double DQN models, this agent introduces controlled randomness in its move selection, enabling greater adaptability and strategic depth. While it approaches near-optimal play, its performance is modestly constrained by imperfect value estimates from the Double DQN and a shallow-depth Minimax booster, both limited by computational efficiency trade-offs."
          contributors="Scott Stempak, Navya Singhal, Mikala Lowrance, Bethel Kim"
          buttonText="Play Against the Bot"
          buttonLink="/play"
        />

        <ProjectCard
          title="SnapChef – Recipe Recommender"
          description="SnapChef is an intelligent recipe recommendation system that combines image analytics, natural language processing, and LLM-based reasoning to help users decide what to cook using only the ingredients they already have. Users can upload photos of their fridge or pantry and describe their preferences in natural language, and SnapChef returns curated meal ideas tailored to what’s on hand and how the user feels."
          tools="Python, OpenAI GPT-4o, LLaMA 3.0 API, AWS S3, Boto3, spaCy, Pandas, Selenium, BeautifulSoup, FastAPI"
          highlights={[
            "Ingredient recognition from images – Uploaded fridge and pantry photos are processed using GPT-4o’s vision capabilities to identify individual food items (e.g. “jam, yogurt, onions”), replacing less effective models like Google Vision and Faster R-CNN.",
            "LLM-powered user intent extraction – SnapChef interprets informal user prompts (e.g. “I’m heading to cheer practice in 2 hours”) to extract relevant recipe attributes like “light meal”, “quick to prepare”, or “low calorie” using GPT-4o.",
            "Feasibility scoring via LLaMA 3 – Recipes are scored on how well their required ingredients match the user’s available ingredients using a custom prompt to assess partial matches and ingredient importance.",
            "Review similarity filtering – Recipes with high feasibility scores are further ranked using spaCy-based similarity analysis between user preferences and real recipe reviews, creating an experience-driven filter that accounts for meal feel and context.",
            "Allergy-aware filtering – Recipes are excluded based on user-selected dietary restrictions (e.g. tree nuts, shellfish, dairy), with groupings built from tagged ingredient lists.",
            "Full-stack deployment ready – All user photos are uploaded to AWS S3 via Boto3 and evaluated through hosted LLM endpoints. Scripts are containerized with Docker for scalable deployment and future integration into mobile or voice interfaces."
          ]}
          outcome="SnapChef successfully recommends five high-fit meals from a database of over 3,000 recipes based solely on a user’s pantry photos and a short natural language prompt. The system demonstrates the power of LLMs in practical, personalized recommendation tasks, integrating computer vision, NLP, and structured filtering into one seamless experience. Future enhancements include adding memory for user inventory, integrating grocery APIs, and launching a full mobile-first interface."
          contributors="Jose Currea, Jenna Ferguson, Hadley Krummel, Evan Hadd, Mohammad Ibrahim, Jennifer Gonzalez"
          buttonText="View Slides"
          buttonLink="https://drive.google.com/file/d/1xrx_WxtLNCdR6uY8HI8Jpq2YTA1DCfSJ/view?usp=drive_link"
        />

        <ProjectCard
          title="American Airlines Price Optimization"
          description="Partnered with American Airlines on a capstone project to modernize fare pricing using machine learning and economic modeling. The goal was to replace intuition-based fare ladders with a systematic, data-driven approach to customer segmentation and price sensitivity estimation—ultimately driving personalized fare recommendations that improve revenue per available seat."
          tools="Python, Scikit-learn, Pandas, NumPy, K-Means, Gaussian Mixture Models, Lasso Regression, PCA, OpenFlights API, Matplotlib, Seaborn"
          highlights={[
            "Route-level segmentation – Clustered over 4,000 origin-destination (OD) airport pairs using a combination of K-Means and Gaussian Mixture Models based on booking behavior, lead time, travel purpose probabilities, and group size.",
            "Intra-cluster customer segmentation – Within each OD group, customers were further clustered (K=5–100) to capture micro-segment heterogeneity in willingness to pay and responsiveness to pricing.",
            "Elasticity-based demand modeling – Trained log-log regression models with Lasso regularization and interaction terms to estimate segment-level price elasticities. This allowed interpretable demand curves that capture nonlinear effects of price, group size, and timing.",
            "Personalized pricing recommendations – Used elasticity estimates to compute markup-adjusted fares at the customer level, with business logic to cap increases at 20% and confidence-scaled price adjustment based on R² values.",
            "Operational playbook – Designed a multi-phase rollout: static thresholds per cluster in prototype, nightly ETL ingestion for model scoring, and a dynamic pricing engine with live booking feedback in production. This pipeline was designed to integrate directly into existing American Airlines revenue management dashboards.",
            "Customer personas & pricing insights – Developed traveler profiles (e.g., “Vacation Vanessa”, “Last-Minute Lisa”) and translated cluster outputs into business-friendly insights for pricing analysts, enabling route-specific revenue strategy."
          ]}
          outcome="Our elasticity-based pricing strategy delivered an estimated 10–12% increase in revenue across tested segments. The framework now enables American Airlines to dynamically segment customers and optimize fares in real time, with clear future extensions into time-series forecasting, competitive pricing integration, and end-to-end automation."
          contributors="Timmy Ren, Theresa Sushil, Pratyush Rohilla, Neal Makwana, Marifer Martinez-Garcia"
          buttonText="View Slides"
          buttonLink="https://drive.google.com/file/d/1XZ6BFcix8d8Q-s7n3HMZKV4PoXl_mGmj/view?usp=drive_link"
        />

        <ProjectCard
          title="Schizophrenia Detection – EEG & MRI"
          description="Designed a dual-modality machine learning system to detect schizophrenia by analyzing both EEG time series and structural MRI scans. The project explored complementary strengths of traditional machine learning and deep learning, with an emphasis on model performance, neurological interpretability, and real-world diagnostic potential."
          tools="Python, TensorFlow, Scikit-learn, NiBabel, NumPy, Pandas, PCA, Logistic Regression, XGBoost, 3D CNNs, 1D CNNs, Contrastive Learning"
          highlights={[
            "EEG Feature Extraction & Baseline Modeling – Preprocessed EEG recordings to compute statistical and spectral features (e.g., entropy, variance, frequency band power). Applied Logistic Regression, Random Forest, and XGBoost classifiers as baseline models, reaching up to 95% recall.",
            "1D CNN for EEG Time Series – Built a deep 1D Convolutional Neural Network to directly model raw EEG sequences. The model captured temporal dependencies across brain regions and significantly improved prediction stability compared to traditional feature-based methods.",
            "3D CNN for Structural MRI – Constructed a 3D Convolutional Neural Network to learn spatial features from full brain volumes. Preprocessed scans were center-cropped, normalized, and reshaped before training. The model learned region-specific morphological signatures associated with schizophrenia.",
            "Contrastive Learning Model for MRI Embeddings – Implemented a Siamese-style architecture to learn robust latent representations of MRI scans by contrasting pairs of similar and dissimilar subjects. This improved generalization and allowed for downstream classification using learned embeddings.", 
            "Multimodal interpretability – Paired model outputs with PCA analysis, attention visualization, and feature importance scores to better understand how each modality (EEG or MRI) contributed to diagnosis.",
            "Robust design for small sample sizes – Carefully tuned each model for performance under clinical data constraints using stratified k-fold cross-validation and regularization techniques."
          ]}
          outcome="Achieved strong diagnostic performance across both modalities. The 3D CNN and EEG-based 1D CNN models performed well individually, while the contrastive learning model offered compact, generalizable embeddings for future downstream tasks. The project was published on Medium and open-sourced on GitHub to promote accessible neuroAI research."
          contributors="Shafee Syed-Quadri, Dhruv Arora, Medha Nalamada, Bethel Kim"
          buttonText="View Article"
          buttonLink="https://medium.com/@rkattan20_58810/predicting-psychiatric-disorders-d970f545edbf"
          extraButtonText="GitHub Repo"
          extraButtonLink="https://github.com/ramzikattan/predschiz.git"
        />

        <ProjectCard
          title="Facial Recognition with FaceNet"
          description="Developed a personalized facial verification system utilizing transfer learning with FaceNet. The project aimed to recognize individual users with minimal training data by fine-tuning a pre-trained FaceNet model on custom datasets, demonstrating the efficacy of facial recognition in low-data scenarios."
          tools="Python, TensorFlow, Keras, FaceNet, Hugging Face Datasets, OpenCV, scikit-learn"
          highlights={[
            "Transfer Learning with FaceNet – Leveraged a pre-trained FaceNet model, freezing base layers and retraining final layers on a small set of user-specific images to create personalized facial recognition models.",
            "Custom Dataset Creation – Combined publicly available images from Hugging Face with self-sourced photos, applying face detection and cropping to focus on facial features, enhancing model accuracy.",
            "Data Augmentation – Implemented random transformations including horizontal flips, brightness adjustments, and rotations to simulate real-world variations, improving model generalization.",
            "Efficient Embedding Generation – Utilized FaceNet to generate 128-dimensional embeddings for each face, enabling efficient comparison and verification through Euclidean distance metrics.", 
            "Performance Evaluation – Assessed model accuracy, false acceptance, and false rejection rates, demonstrating high performance even with limited training data."
          ]}
          outcome="Successfully built a lightweight, personalized facial recognition system capable of accurate verification with minimal data. The project showcased the practicality of transfer learning in developing efficient and accessible facial recognition applications."
          contributors="Carson Mullen, Hrishikesh Salitri, Jenna Ferguson"
          buttonText="GitHub Repo"
          buttonLink="https://github.com/jennamferguson/DeepLearningProject.git"
          extraButtonText="Read Article"
          extraButtonLink="https://medium.com/@jennaferguson2002/facial-verification-transfer-learning-with-facenet-ab341405ddb1"
        />

      </div>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tools,
  highlights,
  outcome,
  contributors,
  buttonText,
  buttonLink,
  extraButtonText,
  extraButtonLink
}) {
  return (
    <div className="bg-white border shadow-md rounded-2xl p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-blue-700">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <p className="text-sm text-gray-600"><span className="font-semibold">Tools:</span> {tools}</p>
      <ul className="list-disc list-inside ml-5 text-gray-700">
        {highlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
      <p className="text-sm text-gray-600"><em>Outcome:</em> {outcome}</p>
      <p className="text-sm text-gray-600"><em>Contributors:</em> {contributors}</p>
      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {buttonText}
        </a>
        {extraButtonText && extraButtonLink && (
          <a
            href={extraButtonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            {extraButtonText}
          </a>
        )}
      </div>
    </div>
  );
}

function ConnectFour() {
  const [board, setBoard] = useState(EMPTY_BOARD);
  const [playerName, setPlayerName] = useState("");
  const [inputName, setInputName] = useState("");
  const [goesFirst, setGoesFirst] = useState("player");
  const [isBotThinking, setIsBotThinking] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [leaderboard, setLeaderboard] = useState({});
  const [playerTurn, setPlayerTurn] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  useEffect(() => {
    if (!playerTurn && !winner && playerName) {
      setIsBotThinking(true);
      setTimeout(() => botMove(board), 500);
    }
  }, [playerTurn]);

  useEffect(() => {
    if (winner) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  }, [winner]);

  const fetchLeaderboard = async () => {
    try {
      const res = await axios.get("http://13.59.247.184:5001/leaderboard");
      setLeaderboard(res.data);
    } catch (err) {
      console.error("Failed to fetch leaderboard", err);
    }
  };

  const dropPiece = async (col) => {
    if (!playerName || isBotThinking || winner || !playerTurn) return;
    const row = findRow(board, col);
    if (row === -1) return;

    const newBoard = board.map((r) => r.map((c) => [...c]));
    newBoard[row][col][0] = 1;
    setBoard(newBoard);

    const winningLine = checkWinner(newBoard, row, col, 0);
    if (winningLine) {
      setWinner("You");
      setWinningCells(winningLine);
      reportWin(playerName);
      return;
    }

    setPlayerTurn(false);
  };

  const botMove = async (currentBoard) => {
    try {
      const response = await axios.post("http://13.59.247.184:5001/predict", {
        board: currentBoard,
      });
      const move = response.data.move;
      const row = findRow(currentBoard, move);
      if (row === -1) return;

      const newBoard = currentBoard.map((r) => r.map((c) => [...c]));
      newBoard[row][move][1] = 1;
      setBoard(newBoard);

      const winningLine = checkWinner(newBoard, row, move, 1);
      if (winningLine) {
        setWinner("Bot");
        setWinningCells(winningLine);
      } else {
        setPlayerTurn(true);
      }
    } catch (err) {
      console.error("Bot move error", err);
    } finally {
      setIsBotThinking(false);
    }
  };

  const findRow = (b, col) => {
    for (let row = NUM_ROWS - 1; row >= 0; row--) {
      if (b[row][col][0] === 0 && b[row][col][1] === 0) return row;
    }
    return -1;
  };

  const checkWinner = (b, row, col, playerIdx) => {
    const directions = [
      [0, 1], [1, 0], [1, 1], [1, -1]
    ];
    for (const [dr, dc] of directions) {
      let count = 1;
      const cells = [[row, col]];
      for (let step of [1, -1]) {
        let r = row + step * dr;
        let c = col + step * dc;
        while (
          r >= 0 && r < NUM_ROWS && c >= 0 && c < NUM_COLS && b[r][c][playerIdx] === 1
        ) {
          cells.push([r, c]);
          count++;
          r += step * dr;
          c += step * dc;
        }
      }
      if (count >= 4) return cells;
    }
    return null;
  };

  const reportWin = async (name) => {
    try {
      await axios.post("http://13.59.247.184:5001/win", { name });
      fetchLeaderboard();
    } catch (err) {
      console.error("Error reporting win", err);
    }
  };

  const resetGame = () => {
    setBoard(EMPTY_BOARD);
    setWinner(null);
    setWinningCells([]);
    setPlayerTurn(goesFirst === "player");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center px-4 py-12">
      {!playerName ? (
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center animate-fade-in">
          <Link to="/" className="text-blue-500 underline mb-6 hover:text-blue-700 transition">
        ← Back to Home
      </Link>
          <h1 className="text-3xl font-bold text-blue-700 mb-4">Welcome to Connect Four!</h1>
          <p className="text-gray-600 mb-6">
            Play against a tournament-winning AI. Enter your name and choose who goes first to begin.
          </p>
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex justify-center mb-6 space-x-6">
            <label className="flex items-center space-x-2 text-gray-700">
              <input type="radio" name="first" value="player" checked={goesFirst === "player"} onChange={(e) => setGoesFirst(e.target.value)} className="accent-blue-500" />
              <span>You go first</span>
            </label>
            <label className="flex items-center space-x-2 text-gray-700">
              <input type="radio" name="first" value="bot" checked={goesFirst === "bot"} onChange={(e) => setGoesFirst(e.target.value)} className="accent-blue-500" />
              <span>Bot goes first</span>
            </label>
          </div>
          <button
            onClick={() => {
              if (inputName.trim()) {
                setPlayerName(inputName.trim());
                setPlayerTurn(goesFirst === "player");
                if (goesFirst === "bot") {
                  setIsBotThinking(true);
                  setTimeout(() => botMove(EMPTY_BOARD()), 500);
                }
              }
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            Start Game
          </button>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <h1 className="text-xl font-bold">Welcome, {playerName}!</h1>
          {isBotThinking && (
            <div className="text-yellow-600 font-semibold flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-2 text-yellow-600" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Bot is thinking...
            </div>
          )}
          <div className="grid grid-cols-7 gap-1 bg-blue-700 p-2 rounded">
            {board.map((row, rIdx) =>
              row.map((cell, cIdx) => {
                const isWinning = winningCells.some(([r, c]) => r === rIdx && c === cIdx);
                return (
                  <div
                    key={`${rIdx}-${cIdx}`}
                    className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 ease-out ${isWinning ? "ring-4 ring-green-500" : ""}`}
                    style={{ backgroundColor: cell[0] ? "red" : cell[1] ? "yellow" : "white" }}
                    onClick={() => dropPiece(cIdx)}
                  ></div>
                );
              })
            )}
          </div>
          {winner && (
            <div className="text-lg mt-4">
              🎉 <strong>{winner}</strong> won!
              <button onClick={resetGame} className="ml-4 bg-gray-300 px-3 py-1 rounded">
                Play Again
              </button>
            </div>
          )}
          <div className="mt-6 text-left">
            <h2 className="font-bold text-lg mb-2">🏆 Leaderboard</h2>
            <ul className="bg-white rounded p-4 shadow">
              {Object.entries(leaderboard)
                .sort(([, a], [, b]) => b - a)
                .map(([name, wins]) => (
                  <li key={name} className="flex justify-between">
                    <span>{name}</span>
                    <span>{wins} win{wins !== 1 ? "s" : ""}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<ConnectFour />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

