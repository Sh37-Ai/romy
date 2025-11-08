# 🧠 Rumy - Analyse psychologique par IA

**Rumy** est une application qui analyse les réponses d’un utilisateur à un test psychologique et son visage via une image.  
Les stimuli sont des **images psychologiques** (par exemple : souris, masques…) présentées à l’utilisateur.  
Les réponses et images sont envoyées à une IA qui estime l’état émotionnel et certains traits de personnalité.

---

## 🚀 Fonctionnalités principales

- 📝 **Analyse des réponses textuelles**
  - L’utilisateur répond à des questions ou choisit des options après avoir vu les images psychologiques
  - Les réponses sont analysées par un **arbre de décision** basé sur un modèle pré-entraîné (~50 000 données)
  - Estimation de l’état émotionnel

- 📸 **Analyse des images du visage**
  - Le CNN analyse différentes zones du visage : cernes, rides, moustache, etc.
  - Détection de caractéristiques telles que le genre ou les signes de fatigue

- 🌐 **Interface web interactive**
  - Frontend développé en **React**
  - Les réponses et images sont envoyées au backend Flask
  - Résultats affichés en temps réel à l’utilisateur

---

## 🧠 Objectif du projet

- Combiner **IA pour texte et images** afin d’évaluer l’état émotionnel d’un utilisateur  
- Démontrer l’utilisation de **modèles pré-entraînés** pour des applications concrètes  
- Développer un projet FullStack **React + Flask + IA**  

---

## 🧰 Stack technique

| Technologie | Usage |
|------------|------|
| React | Frontend dynamique |
| Python + Flask | Backend API REST |
| Scikit-learn | Arbre de décision pour texte |
| TensorFlow / Keras | CNN pour l’analyse d’image |
| HTML / CSS | Templates et style |
| JavaScript / TypeScript | Logique frontend |

---

## ⚙️ Installation et exécution

### 🧾 Prérequis
- Node.js 18+ et npm 9+  
- Python 3.9+  
- Bibliothèques Python : Flask, TensorFlow, Keras, scikit-learn, numpy, pandas  

### 🔧 Étapes d’installation

**Backend Flask :**
```bash
# 1️⃣ Cloner le projet
git clone https://github.com/Sh37-Ai/Rumy.git
cd Rumy/backend

# 2️⃣ Créer un environnement virtuel
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows

# 3️⃣ Installer les dépendances
pip install -r requirements.txt

# 4️⃣ Lancer le serveur Flask
python app.py
