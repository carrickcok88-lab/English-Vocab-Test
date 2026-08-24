/**
 * Quiz Module
 * Handles quiz creation, execution, and grading
 */

class QuizEngine {
  constructor() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.mistakes = [];
    this.startTime = null;
    this.endTime = null;
  }

  /**
   * Generate quiz questions for a level
   */
  generateQuiz(level) {
    this.questions = [];
    const words = getLevelVocabulary(level);
    const phrasals = getLevelPhrasals(level);
    const idioms = getLevelIdioms(level);

    // Word meaning questions
    for (let i = 0; i < CONFIG.QUIZ.WORD_MEANING; i++) {
      const word = words[i % words.length];
      const distractors = Helpers.shuffle(words)
        .filter((w, idx) => idx !== (i % words.length))
        .slice(0, 3)
        .map(w => w.meaning);

      this.questions.push({
        type: CONFIG.QUESTION_TYPES.MEANING,
        questionText: `Apa arti kata "${word.word}"?`,
        options: Helpers.shuffle([word.meaning, ...distractors]),
        correctAnswer: word.meaning,
        difficulty: word.difficulty,
        explanation: `${word.word} artinya "${word.meaning}". Contoh: ${word.example}`
      });
    }

    // Context questions
    for (let i = 0; i < CONFIG.QUIZ.CONTEXT; i++) {
      const word = words[i % words.length];
      const questionText = `Rina ingin ${word.meaning} sebelum ujian. Kata bahasa Inggris yang paling tepat adalah...`;
      const options = Helpers.shuffle(words).slice(0, 4).map(w => w.word);
      
      if (!options.includes(word.word)) {
        options[0] = word.word;
      }

      this.questions.push({
        type: CONFIG.QUESTION_TYPES.CONTEXT,
        questionText: questionText,
        options: Helpers.shuffle(options),
        correctAnswer: word.word,
        difficulty: word.difficulty,
        explanation: `Jawaban yang tepat adalah "${word.word}" yang berarti "${word.meaning}".`
      });
    }

    // Phrasal verb questions
    for (let i = 0; i < CONFIG.QUIZ.PHRASAL; i++) {
      const phrasal = phrasals[i % phrasals.length];
      const distractors = Helpers.shuffle(phrasals)
        .filter((p, idx) => idx !== (i % phrasals.length))
        .slice(0, 3)
        .map(p => p.meaning);

      this.questions.push({
        type: CONFIG.QUESTION_TYPES.PHRASAL,
        questionText: `Apa arti "${phrasal.phrase}"?`,
        options: Helpers.shuffle([phrasal.meaning, ...distractors]),
        correctAnswer: phrasal.meaning,
        difficulty: 'hard',
        explanation: `"${phrasal.phrase}" berarti "${phrasal.meaning}". Contoh: ${phrasal.example}`
      });
    }

    // Idiom questions
    for (let i = 0; i < CONFIG.QUIZ.IDIOM; i++) {
      const idiom = idioms[i % idioms.length];
      const distractors = Helpers.shuffle(idioms)
        .filter((id, idx) => idx !== (i % idioms.length))
        .slice(0, 3)
        .map(id => id.meaning);

      this.questions.push({
        type: CONFIG.QUESTION_TYPES.IDIOM,
        questionText: `Apa arti "${idiom.phrase}" dalam penggunaan sehari-hari?`,
        options: Helpers.shuffle([idiom.meaning, ...distractors]),
        correctAnswer: idiom.meaning,
        difficulty: 'hard',
        explanation: `"${idiom.phrase}" berarti "${idiom.meaning}". Contoh: ${idiom.example}`
      });
    }

    // Shuffle all questions
    this.questions = Helpers.shuffle(this.questions);
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.mistakes = [];
    this.startTime = Date.now();

    return this.questions;
  }

  /**
   * Get current question
   */
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  /**
   * Check answer and update score
   */
  answerQuestion(selectedAnswer) {
    const question = this.getCurrentQuestion();
    const isCorrect = selectedAnswer === question.correctAnswer;

    if (isCorrect) {
      this.score++;
    } else {
      this.mistakes.push({
        question: question.questionText,
        yourAnswer: selectedAnswer,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation,
        type: question.type
      });
    }

    return {
      isCorrect,
      explanation: question.explanation,
      correctAnswer: question.correctAnswer
    };
  }

  /**
   * Move to next question
   */
  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      return true;
    }
    return false;
  }

  /**
   * Finish quiz and calculate results
   */
  finishQuiz() {
    this.endTime = Date.now();
    const totalTime = (this.endTime - this.startTime) / 1000; // in seconds
    const accuracy = (this.score / this.questions.length) * 100;
    const totalQuestions = this.questions.length;

    return {
      score: this.score,
      totalQuestions: totalQuestions,
      accuracy: accuracy,
      mistakes: this.mistakes,
      timeTaken: totalTime,
      passed: accuracy >= CONFIG.PASS_SCORE
    };
  }

  /**
   * Get progress
   */
  getProgress() {
    return {
      current: this.currentQuestionIndex + 1,
      total: this.questions.length,
      percentage: ((this.currentQuestionIndex + 1) / this.questions.length) * 100,
      score: this.score
    };
  }

  /**
   * Reset quiz
   */
  reset() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.mistakes = [];
    this.startTime = null;
    this.endTime = null;
  }
}

const quiz = new QuizEngine();
