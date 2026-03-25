export interface Question {
  id: number;
  text: string;
  category: string;
  options: { text: string; score: number }[];
}

export const questions: Question[] = [
  // --- LINGUISTIC SECTION (1-10) ---
  {
    id: 1,
    category: "Linguistic",
    text: "How many books or long-form articles do you read for pleasure in a year?",
    options: [
      { text: "Read only when mandatory", score: 1 },
      { text: "Read 1–3 books/articles per year", score: 2 },
      { text: "Read 1 book/blog every month", score: 3 },
      { text: "Read weekly", score: 4 },
      { text: "Daily reader (20+ books/year)", score: 5 }
    ]
  },
  {
    id: 2,
    category: "Linguistic",
    text: "How often do you write creatively (stories, poems, journals) outside of work?",
    options: [
      { text: "Avoid writing whenever possible", score: 1 },
      { text: "Write only for basic communication", score: 2 },
      { text: "Keep a personal journal occasionally", score: 3 },
      { text: "Regularly write stories or essays", score: 4 },
      { text: "Actively publish my writing", score: 5 }
    ]
  },
  {
    id: 3,
    category: "Linguistic",
    text: "How clearly can you express your ideas in words?",
    options: [
      { text: "Often struggle to find the right words", score: 1 },
      { text: "Can explain things but repeat myself", score: 2 },
      { text: "Can summarize ideas effectively", score: 3 },
      { text: "Able to explain complex topics clearly", score: 4 },
      { text: "Praised for being exceptionally articulate", score: 5 }
    ]
  },
  {
    id: 4,
    category: "Linguistic",
    text: "What is your preference for debates and discussions?",
    options: [
      { text: "Stay silent during disagreements", score: 1 },
      { text: "Listen but rarely contribute", score: 2 },
      { text: "State opinion if interested", score: 3 },
      { text: "Enjoy structured arguments", score: 4 },
      { text: "Thrive in high-pressure debates", score: 5 }
    ]
  },
  {
    id: 5,
    category: "Linguistic",
    text: "How easily do you pick up new languages?",
    options: [
      { text: "Struggle with basic grammar", score: 1 },
      { text: "Only speak/understand native language", score: 2 },
      { text: "Know phrases in a second language", score: 3 },
      { text: "Conversational in a second language", score: 4 },
      { text: "Multilingual and learn easily", score: 5 }
    ]
  },
  {
    id: 6,
    category: "Linguistic",
    text: "How do you feel about word games (Scrabble, Crosswords)?",
    options: [
      { text: "Find them frustrating or boring", score: 1 },
      { text: "Play them very rarely", score: 2 },
      { text: "Enjoy them occasionally", score: 3 },
      { text: "Play regularly with high win-rate", score: 4 },
      { text: "Expert level/Tournament player", score: 5 }
    ]
  },
  {
    id: 7,
    category: "Linguistic",
    text: "How well do you remember information after reading it?",
    options: [
      { text: "Forget almost everything within an hour", score: 1 },
      { text: "Remember only the main title", score: 2 },
      { text: "Remember key points but not details", score: 3 },
      { text: "Can recall specific quotes/data", score: 4 },
      { text: "Photographic-like memory for text", score: 5 }
    ]
  },
  {
    id: 8,
    category: "Linguistic",
    text: "What is your comfort level with public speaking?",
    options: [
      { text: "Experience total freeze/avoidance", score: 1 },
      { text: "Can do it if reading from a script", score: 2 },
      { text: "Comfortable with small groups", score: 3 },
      { text: "Confident presenting to large crowds", score: 4 },
      { text: "Feel energized and charismatic", score: 5 }
    ]
  },
  {
    id: 9,
    category: "Linguistic",
    text: "How much do you prefer subjects like Literature or History?",
    options: [
      { text: "Strongly dislike; prefer numbers/sports", score: 1 },
      { text: "Only interested in movie adaptations", score: 2 },
      { text: "Neutral interest", score: 3 },
      { text: "Actively choose as electives", score: 4 },
      { text: "Research history/literature in free time", score: 5 }
    ]
  },
  {
    id: 10,
    category: "Linguistic",
    text: "How effectively can you explain complex ideas simply?",
    options: [
      { text: "Make simple things more confusing", score: 1 },
      { text: "Stick to facts but use jargon", score: 2 },
      { text: "Can simplify for a friend", score: 3 },
      { text: "Can explain concepts to a teenager", score: 4 },
      { text: "Can explain Quantum Physics to a 5-year-old", score: 5 }
    ]
  },

  // --- LOGICAL-MATHEMATICAL SECTION (11-20) ---
  {
    id: 11,
    category: "Logical",
    text: "How do you feel about solving math problems?",
    options: [
      { text: "Avoid calculations; use apps for everything", score: 1 },
      { text: "Basic math is okay; complex is stressful", score: 2 },
      { text: "Enjoy math for practical purposes", score: 3 },
      { text: "Find solving equations fun", score: 4 },
      { text: "Solve complex problems for a challenge", score: 5 }
    ]
  },
  {
    id: 12,
    category: "Logical",
    text: "What is your interest in puzzles and brain teasers?",
    options: [
      { text: "Find them frustrating/give up quickly", score: 1 },
      { text: "Join in if friends are doing them", score: 2 },
      { text: "Enjoy logic games occasionally", score: 3 },
      { text: "Seek out riddles and escape rooms", score: 4 },
      { text: "The 'go-to' person for tough puzzles", score: 5 }
    ]
  },
  {
    id: 13,
    category: "Logical",
    text: "How do you make decisions?",
    options: [
      { text: "Go with gut feeling/heart", score: 1 },
      { text: "Quick decisions, adjust as I go", score: 2 },
      { text: "Weigh a few pros and cons", score: 3 },
      { text: "Use frameworks/lists to analyze", score: 4 },
      { text: "Systematic process (spreadsheets/data)", score: 5 }
    ]
  },
  {
    id: 14,
    category: "Logical",
    text: "How much do you enjoy coding or technology?",
    options: [
      { text: "Find technology confusing", score: 1 },
      { text: "Basic user (social/browsing)", score: 2 },
      { text: "Enjoy 'power-user' features", score: 3 },
      { text: "Experimented with automation/coding", score: 4 },
      { text: "Build own programs/scripts", score: 5 }
    ]
  },
  {
    id: 15,
    category: "Logical",
    text: "What is your stance on data and statistics?",
    options: [
      { text: "Numbers feel boring/overwhelming", score: 1 },
      { text: "Look at summary only", score: 2 },
      { text: "Interested if related to hobbies", score: 3 },
      { text: "Look for trends and the 'why'", score: 4 },
      { text: "Love deep-diving into raw data", score: 5 }
    ]
  },
  {
    id: 16,
    category: "Logical",
    text: "How interested are you in science experiments?",
    options: [
      { text: "Prefer arts or physical activities", score: 1 },
      { text: "Liked watching them in school only", score: 2 },
      { text: "Watch science videos online", score: 3 },
      { text: "Like testing my own theories", score: 4 },
      { text: "Follow strict scientific method", score: 5 }
    ]
  },
  {
    id: 17,
    category: "Logical",
    text: "Do you look for patterns in numbers or situations?",
    options: [
      { text: "Take things as they come", score: 1 },
      { text: "Notice patterns only if pointed out", score: 2 },
      { text: "Occasionally notice coincidences", score: 3 },
      { text: "Quick to spot behavior/number trends", score: 4 },
      { text: "See the world as interconnected systems", score: 5 }
    ]
  },
  {
    id: 18,
    category: "Logical",
    text: "What is your preferred learning style?",
    options: [
      { text: "Trial and error/Chaos", score: 1 },
      { text: "Learning by doing (no manual)", score: 2 },
      { text: "Mix of freedom and guidelines", score: 3 },
      { text: "Clear syllabus and instructions", score: 4 },
      { text: "Need a highly organized roadmap", score: 5 }
    ]
  },
  {
    id: 19,
    category: "Logical",
    text: "How do you feel about strategy games (Chess, Sudoku)?",
    options: [
      { text: "Prefer luck or speed games", score: 1 },
      { text: "Play casually, not seriously", score: 2 },
      { text: "Enjoy planning and thinking", score: 3 },
      { text: "Study strategies to improve", score: 4 },
      { text: "Highly competitive expert", score: 5 }
    ]
  },
  {
    id: 20,
    category: "Logical",
    text: "How often do you question how things work?",
    options: [
      { text: "Happy as long as it works", score: 1 },
      { text: "Look it up only if it breaks", score: 2 },
      { text: "Curious about everyday tech", score: 3 },
      { text: "Take things apart to see 'why'", score: 4 },
      { text: "Insatiable need to understand mechanics", score: 5 }
    ]
  },

  // --- SPATIAL-VISUAL SECTION (21-30) ---
  {
    id: 21,
    category: "Spatial",
    text: "What is your relationship with drawing or sketching?",
    options: [
      { text: "Struggle with basic shapes", score: 1 },
      { text: "Doodle occasionally", score: 2 },
      { text: "Can sketch recognizable objects", score: 3 },
      { text: "Enjoy drawing for expression", score: 4 },
      { text: "Perfecting professional art/digital", score: 5 }
    ]
  },
  {
    id: 22,
    category: "Spatial",
    text: "How easily can you read maps and diagrams?",
    options: [
      { text: "Feel lost even with GPS", score: 1 },
      { text: "Find paper maps confusing", score: 2 },
      { text: "Comfortable navigating with maps", score: 3 },
      { text: "Can visualize the route in my head", score: 4 },
      { text: "Internal compass; navigate without tools", score: 5 }
    ]
  },
  {
    id: 23,
    category: "Spatial",
    text: "How vividly can you visualize things in your mind?",
    options: [
      { text: "Mostly dark/hard to see images", score: 1 },
      { text: "Vaguely imagine basic shapes", score: 2 },
      { text: "Visualize a room with detail", score: 3 },
      { text: "Rotate 3D objects in imagination", score: 4 },
      { text: "Vivid, high-definition mental imagery", score: 5 }
    ]
  },
  {
    id: 24,
    category: "Spatial",
    text: "What is your interest in photography or videography?",
    options: [
      { text: "Rarely take photos", score: 1 },
      { text: "Point-and-shoot for memories", score: 2 },
      { text: "Find good angles and lighting", score: 3 },
      { text: "Understand composition and framing", score: 4 },
      { text: "Pro-level skill; see the shot beforehand", score: 5 }
    ]
  },
  {
    id: 25,
    category: "Spatial",
    text: "How much do you notice design and color details?",
    options: [
      { text: "Rarely notice changes in decor", score: 1 },
      { text: "Notice major changes only", score: 2 },
      { text: "Aware of general 'vibe' and colors", score: 3 },
      { text: "Notice subtle fonts/textures", score: 4 },
      { text: "Sensitive to smallest design flaws", score: 5 }
    ]
  },
  {
    id: 26,
    category: "Spatial",
    text: "How do you feel about working with graphics/editing tools?",
    options: [
      { text: "Find editing software too complicated", score: 1 },
      { text: "Use basic phone filters", score: 2 },
      { text: "Can make things look good on Canva", score: 3 },
      { text: "Comfortable with layers/complex tools", score: 4 },
      { text: "Pro creator of complex visual worlds", score: 5 }
    ]
  },
  {
    id: 27,
    category: "Spatial",
    text: "Do you prefer learning through images and charts?",
    options: [
      { text: "Find charts more confusing than text", score: 1 },
      { text: "Prefer listening to explanations", score: 2 },
      { text: "Like some pictures in text", score: 3 },
      { text: "Learn faster with infographics", score: 4 },
      { text: "Need visual maps/diagrams to learn", score: 5 }
    ]
  },
  {
    id: 28,
    category: "Spatial",
    text: "How interested are you in architecture or interior design?",
    options: [
      { text: "Don't pay attention to buildings", score: 1 },
      { text: "Notice if a building is 'pretty'", score: 2 },
      { text: "Enjoy home makeover shows", score: 3 },
      { text: "Strong opinions on layouts/styles", score: 4 },
      { text: "Obsessed with geometry and 'flow'", score: 5 }
    ]
  },
  {
    id: 29,
    category: "Spatial",
    text: "How easily can you assemble objects?",
    options: [
      { text: "Struggle with basic IKEA/LEGO", score: 1 },
      { text: "Need to follow manual very slowly", score: 2 },
      { text: "Usually get it right and enjoy it", score: 3 },
      { text: "Assemble without the manual", score: 4 },
      { text: "Build/fix complex 3D machinery easily", score: 5 }
    ]
  },
  {
    id: 30,
    category: "Spatial",
    text: "How often do you imagine creative designs or layouts?",
    options: [
      { text: "Hard to imagine rearranging my room", score: 1 },
      { text: "Imagine 1 or 2 layout options", score: 2 },
      { text: "Plan layouts on paper first", score: 3 },
      { text: "Mentally 'walk through' designs", score: 4 },
      { text: "See 3D layouts from every angle", score: 5 }
    ]
  },

  // --- BODILY-KINESTHETIC SECTION (31-40) ---
  {
    id: 31,
    category: "Kinesthetic",
    text: "What is your level of physical engagement?",
    options: [
      { text: "Prefer sedentary activities", score: 1 },
      { text: "Occasional light activity", score: 2 },
      { text: "Exercise 1-2 times a week", score: 3 },
      { text: "Active daily; feel restless if still", score: 4 },
      { text: "Dedicated athlete; daily movement core", score: 5 }
    ]
  },
  {
    id: 32,
    category: "Kinesthetic",
    text: "How effectively do you learn through hands-on practice?",
    options: [
      { text: "Learn best by reading/listening", score: 1 },
      { text: "Like a demo before trying", score: 2 },
      { text: "Understand better once tried once", score: 3 },
      { text: "Must 'do' the task to understand", score: 4 },
      { text: "Learn instantly by performing/touching", score: 5 }
    ]
  },
  {
    id: 33,
    category: "Kinesthetic",
    text: "What is your interest in performing arts (dance/acting)?",
    options: [
      { text: "Uncomfortable being center of attention", score: 1 },
      { text: "Can do a background role", score: 2 },
      { text: "Enjoy performing at social events", score: 3 },
      { text: "Perform rehearsed movements well", score: 4 },
      { text: "Natural performer; high body control", score: 5 }
    ]
  },
  {
    id: 34,
    category: "Kinesthetic",
    text: "Do you prefer practical work over theory?",
    options: [
      { text: "Love abstract concepts and 'why'", score: 1 },
      { text: "Prefer mix, but theory first", score: 2 },
      { text: "Get bored with long lectures", score: 3 },
      { text: "Skip instructions and start building", score: 4 },
      { text: "Theory is exhausting; only learn by doing", score: 5 }
    ]
  },
  {
    id: 35,
    category: "Kinesthetic",
    text: "How would you describe your coordination and balance?",
    options: [
      { text: "Consider myself clumsy", score: 1 },
      { text: "Balance is average", score: 2 },
      { text: "Fairly steady (can ride a bike)", score: 3 },
      { text: "Excellent hand-eye coordination", score: 4 },
      { text: "Professional level (yoga/gymnastics)", score: 5 }
    ]
  },
  {
    id: 36,
    category: "Kinesthetic",
    text: "How much do you enjoy building or fixing things?",
    options: [
      { text: "Call a pro for smallest repairs", score: 1 },
      { text: "Basic tasks (lightbulb/screw)", score: 2 },
      { text: "Enjoy DIY; fix common items", score: 3 },
      { text: "Skilled with tools; enjoy repairs", score: 4 },
      { text: "Build complex objects from scratch", score: 5 }
    ]
  },
  {
    id: 37,
    category: "Kinesthetic",
    text: "How do you express yourself through movement?",
    options: [
      { text: "Use few gestures; stay still", score: 1 },
      { text: "Use hands occasionally", score: 2 },
      { text: "Animated talker; use body to tell stories", score: 3 },
      { text: "Emotions shown through posture/move", score: 4 },
      { text: "Primary communication is touch/dance", score: 5 }
    ]
  },
  {
    id: 38,
    category: "Kinesthetic",
    text: "What is your connection to the outdoors?",
    options: [
      { text: "Indoor person; prefer climate control", score: 1 },
      { text: "Outdoor for short periods only", score: 2 },
      { text: "Hike/swim/nature on weekends", score: 3 },
      { text: "Feel most alive when outside", score: 4 },
      { text: "Most free time spent in intense nature", score: 5 }
    ]
  },
  {
    id: 39,
    category: "Kinesthetic",
    text: "How strong is your competitive drive?",
    options: [
      { text: "Find competition stressful", score: 1 },
      { text: "Play but don't care about winning", score: 2 },
      { text: "Enjoy friendly matches", score: 3 },
      { text: "Highly competitive; push to win", score: 4 },
      { text: "Thrive on high-stakes adrenaline", score: 5 }
    ]
  },
  {
    id: 40,
    category: "Kinesthetic",
    text: "Do you prefer interactive activities over lectures?",
    options: [
      { text: "Find interactive parts distracting", score: 1 },
      { text: "Participate if group is small", score: 2 },
      { text: "Prefer workshops over speeches", score: 3 },
      { text: "Lose focus without interaction", score: 4 },
      { text: "Only attend active learning sessions", score: 5 }
    ]
  },

  // --- MUSICAL SECTION (41-50) ---
  {
    id: 41,
    category: "Musical",
    text: "What is your daily music consumption?",
    options: [
      { text: "Rarely listen; prefer silence", score: 1 },
      { text: "Listen occasionally (car/store)", score: 2 },
      { text: "Listen about an hour a day", score: 3 },
      { text: "Music playing most of the day", score: 4 },
      { text: "Deep listener; dedicated analysis time", score: 5 }
    ]
  },
  {
    id: 42,
    category: "Musical",
    text: "How well can you recognize pitch and tone?",
    options: [
      { text: "Hard to tell if singing is off-key", score: 1 },
      { text: "Tell high from low only", score: 2 },
      { text: "Recognize familiar songs in new keys", score: 3 },
      { text: "Identify specific instruments/harmonies", score: 4 },
      { text: "Perfect pitch; identify exact notes", score: 5 }
    ]
  },
  {
    id: 43,
    category: "Musical",
    text: "What is your level of musical performance?",
    options: [
      { text: "Do not sing or play instruments", score: 1 },
      { text: "Sing along to radio alone", score: 2 },
      { text: "Enjoy karaoke/learning instrument", score: 3 },
      { text: "Perform for others", score: 4 },
      { text: "Skilled musician; practice/perform reg", score: 5 }
    ]
  },
  {
    id: 44,
    category: "Musical",
    text: "How strong is your auditory memory for songs?",
    options: [
      { text: "Struggle to remember favorite lyrics", score: 1 },
      { text: "Remember chorus of popular songs", score: 2 },
      { text: "Hum melody after a few listens", score: 3 },
      { text: "Memorize song structure quickly", score: 4 },
      { text: "Recreate complex melody after 1 listen", score: 5 }
    ]
  },
  {
    id: 45,
    category: "Musical",
    text: "How aware are you of rhythms in everyday sounds?",
    options: [
      { text: "Don't notice background noises", score: 1 },
      { text: "Only notice loud/annoying sounds", score: 2 },
      { text: "Tap along to repetitive sounds", score: 3 },
      { text: "Hear 'music' in environmental noise", score: 4 },
      { text: "Constantly aware of global tempo/rhythm", score: 5 }
    ]
  },
  {
    id: 46,
    category: "Musical",
    text: "How much do you enjoy composing music or lyrics?",
    options: [
      { text: "Never tried creating music/poetry", score: 1 },
      { text: "Hum original tunes to myself only", score: 2 },
      { text: "Write simple poems/basic melodies", score: 3 },
      { text: "Regularly write lyrics or compose", score: 4 },
      { text: "Songwriter; create complex pieces", score: 5 }
    ]
  },
  {
    id: 47,
    category: "Musical",
    text: "How strongly does music affect your mood?",
    options: [
      { text: "Background noise; doesn't shift mood", score: 1 },
      { text: "Songs make me happy/sad briefly", score: 2 },
      { text: "Use music to relax or get energized", score: 3 },
      { text: "Playlists for every emotional state", score: 4 },
      { text: "Primary emotional outlet; shift perspective", score: 5 }
    ]
  },
  {
    id: 48,
    category: "Musical",
    text: "Do you prefer studying with music?",
    options: [
      { text: "Need absolute silence to focus", score: 1 },
      { text: "Music without lyrics only", score: 2 },
      { text: "Soft background music is okay", score: 3 },
      { text: "Helps concentration and retention", score: 4 },
      { text: "Learn best when set to rhythm/rhyme", score: 5 }
    ]
  },
  {
    id: 49,
    category: "Musical",
    text: "How easily can you keep the beat?",
    options: [
      { text: "Difficult to clap in time", score: 1 },
      { text: "Keep a simple/loud beat", score: 2 },
      { text: "Tap foot/dance in time easily", score: 3 },
      { text: "Maintain complex/changing rhythms", score: 4 },
      { text: "Professional level rhythmic precision", score: 5 }
    ]
  },
  {
    id: 50,
    category: "Musical",
    text: "What is your interest in sound production/editing?",
    options: [
      { text: "Don't know bass from treble", score: 1 },
      { text: "Adjust EQ settings occasionally", score: 2 },
      { text: "Curious about recording and mixing", score: 3 },
      { text: "Edit audio clips/basic remixes", score: 4 },
      { text: "Deeply involved in professional audio", score: 5 }
    ]
  },

  // --- INTERPERSONAL SECTION (51-60) ---
  {
    id: 51,
    category: "Interpersonal",
    text: "How well do you understand others' feelings?",
    options: [
      { text: "Find people's reactions confusing", score: 1 },
      { text: "Notice feelings only if obvious", score: 2 },
      { text: "Sense the 'vibe' after a short talk", score: 3 },
      { text: "Quick to pick up body language shifts", score: 4 },
      { text: "Feel what others feel instinctively", score: 5 }
    ]
  },
  {
    id: 52,
    category: "Interpersonal",
    text: "Do friends come to you for advice?",
    options: [
      { text: "Stay out of personal business", score: 1 },
      { text: "Talk about surface issues only", score: 2 },
      { text: "Occasionally ask for my opinion", score: 3 },
      { text: "The 'designated listener' of the group", score: 4 },
      { text: "Primary person for difficult decisions", score: 5 }
    ]
  },
  {
    id: 53,
    category: "Interpersonal",
    text: "What is your preference for teamwork?",
    options: [
      { text: "Strongly prefer working alone", score: 1 },
      { text: "Work in a group if tasks divided", score: 2 },
      { text: "Like group projects occasionally", score: 3 },
      { text: "More energized when working in a team", score: 4 },
      { text: "Best results only from collaboration", score: 5 }
    ]
  },
  {
    id: 54,
    category: "Interpersonal",
    text: "How comfortable are you leading a group?",
    options: [
      { text: "Prefer to follow instructions", score: 1 },
      { text: "Lead if necessary, but stressed", score: 2 },
      { text: "Manage small tasks/sub-teams", score: 3 },
      { text: "Naturally take charge and organize", score: 4 },
      { text: "Thrive in leadership roles", score: 5 }
    ]
  },
  {
    id: 55,
    category: "Interpersonal",
    text: "How well can you resolve conflicts?",
    options: [
      { text: "Shut down when people argue", score: 1 },
      { text: "Wait for conflicts to blow over", score: 2 },
      { text: "Help friends make up after small tiffs", score: 3 },
      { text: "Listen to both sides/find middle ground", score: 4 },
      { text: "Master mediator; calm intense arguments", score: 5 }
    ]
  },
  {
    id: 56,
    category: "Interpersonal",
    text: "How well do you communicate across age groups?",
    options: [
      { text: "Comfortable only with exact same age", score: 1 },
      { text: "Talk to others, but feels forced", score: 2 },
      { text: "Polite talk with children/elders", score: 3 },
      { text: "Adjust style to connect with anyone", score: 4 },
      { text: "Build deep rapport with any generation", score: 5 }
    ]
  },
  {
    id: 57,
    category: "Interpersonal",
    text: "How much do you enjoy helping others?",
    options: [
      { text: "Focus on own goals primarily", score: 1 },
      { text: "Help if it doesn't take much effort", score: 2 },
      { text: "Small favors for friends/family", score: 3 },
      { text: "Satisfaction in volunteering/support", score: 4 },
      { text: "Primary motivation is service/impact", score: 5 }
    ]
  },
  {
    id: 58,
    category: "Interpersonal",
    text: "How effectively can you motivate people?",
    options: [
      { text: "Struggle to get people to listen", score: 1 },
      { text: "Encourage friends, but no public speaking", score: 2 },
      { text: "Get group excited for fun events", score: 3 },
      { text: "Inspire people to work harder/change", score: 4 },
      { text: "Highly persuasive; rally discouraged teams", score: 5 }
    ]
  },
  {
    id: 59,
    category: "Interpersonal",
    text: "How do you feel about social events?",
    options: [
      { text: "Large gatherings drain me completely", score: 1 },
      { text: "Stay in a corner with one friend", score: 2 },
      { text: "Enjoy medium-sized groups I know", score: 3 },
      { text: "Love meeting new people/social 'buzz'", score: 4 },
      { text: "Life of the party; energized by crowds", score: 5 }
    ]
  },
  {
    id: 60,
    category: "Interpersonal",
    text: "How well do you work in collaborative environments?",
    options: [
      { text: "Find brainstorming a waste of time", score: 1 },
      { text: "Contribute part, let others handle rest", score: 2 },
      { text: "Enjoy sharing ideas/execute solo", score: 3 },
      { text: "Seek shared-idea environments", score: 4 },
      { text: "Peak performance when bouncing ideas", score: 5 }
    ]
  },

  // --- INTRAPERSONAL SECTION (61-70) ---
  {
    id: 61,
    category: "Intrapersonal",
    text: "How well do you understand your strengths/weaknesses?",
    options: [
      { text: "Surprised by my own performance", score: 1 },
      { text: "Vague idea of my skills", score: 2 },
      { text: "Can list top three of each", score: 3 },
      { text: "Play to strengths/manage weaknesses", score: 4 },
      { text: "Precise, objective understanding", score: 5 }
    ]
  },
  {
    id: 62,
    category: "Intrapersonal",
    text: "How often do you reflect on your goals?",
    options: [
      { text: "Live day-to-day; no long-term goals", score: 1 },
      { text: "Goals in head, but rarely check-in", score: 2 },
      { text: "Think about future every few months", score: 3 },
      { text: "Review and adjust plans monthly", score: 4 },
      { text: "Daily/Weekly reflection", score: 5 }
    ]
  },
  {
    id: 63,
    category: "Intrapersonal",
    text: "What is your preference for independence?",
    options: [
      { text: "Feel lost without guidance", score: 1 },
      { text: "Prefer shared responsibility", score: 2 },
      { text: "Like mix of group and solo", score: 3 },
      { text: "Most productive when left alone", score: 4 },
      { text: "Solitary achiever; best work solo", score: 5 }
    ]
  },
  {
    id: 64,
    category: "Intrapersonal",
    text: "How self-motivated are you?",
    options: [
      { text: "Need external rewards/deadlines", score: 1 },
      { text: "Start on own; need push to finish", score: 2 },
      { text: "Stay on track with a vision", score: 3 },
      { text: "Rarely need anyone to push me", score: 4 },
      { text: "Intense internal drive", score: 5 }
    ]
  },
  {
    id: 65,
    category: "Intrapersonal",
    text: "How well do you manage stress?",
    options: [
      { text: "Overwhelmed easily; hard to calm", score: 1 },
      { text: "Stressed, but recover eventually", score: 2 },
      { text: "Have specific coping mechanisms", score: 3 },
      { text: "Stay calm and focused during crises", score: 4 },
      { text: "Calm in the storm; use stress as fuel", score: 5 }
    ]
  },
  {
    id: 66,
    category: "Intrapersonal",
    text: "How do you handle personal goal setting?",
    options: [
      { text: "Go with the flow", score: 1 },
      { text: "Set resolutions, rarely stick to them", score: 2 },
      { text: "Set goals for big events (exams/fit)", score: 3 },
      { text: "Clear written goals for all areas", score: 4 },
      { text: "Systematic SMART goal tracking", score: 5 }
    ]
  },
  {
    id: 67,
    category: "Intrapersonal",
    text: "What is your interest in self-improvement?",
    options: [
      { text: "Happy as I am; no need to work", score: 1 },
      { text: "Watch occasional self-help videos", score: 2 },
      { text: "Enjoy learning things to be better", score: 3 },
      { text: "Regularly read books for mindset", score: 4 },
      { text: "Life is a project of constant evolution", score: 5 }
    ]
  },
  {
    id: 68,
    category: "Intrapersonal",
    text: "How deeply do you think about life decisions?",
    options: [
      { text: "Choose based on ease/fun now", score: 1 },
      { text: "Think about major choices briefly", score: 2 },
      { text: "Consider alignment with values", score: 3 },
      { text: "Analyze long-term impact deeply", score: 4 },
      { text: "Philosopher of own life; multi-angle", score: 5 }
    ]
  },
  {
    id: 69,
    category: "Intrapersonal",
    text: "How well do you learn from your mistakes?",
    options: [
      { text: "Discouraged and try to forget", score: 1 },
      { text: "Realize mistake, but repeat it", score: 2 },
      { text: "Figure out 'why' to avoid repeats", score: 3 },
      { text: "Failure is a valuable growth data point", score: 4 },
      { text: "Post-mortem on every mistake", score: 5 }
    ]
  },
  {
    id: 70,
    category: "Intrapersonal",
    text: "What is your level of emotional self-awareness?",
    options: [
      { text: "Feel emotions without knowing why", score: 1 },
      { text: "Understand feelings after they pass", score: 2 },
      { text: "Can name feelings in the moment", score: 3 },
      { text: "Understand triggers for different moods", score: 4 },
      { text: "Total clarity; observe without control", score: 5 }
    ]
  },

  // --- NATURALIST SECTION (71-80) ---
  {
    id: 71,
    category: "Naturalist",
    text: "What is your connection to nature?",
    options: [
      { text: "Prefer urban settings/find wild uncomfortable", score: 1 },
      { text: "Outdoor with modern comforts only", score: 2 },
      { text: "Visit parks on days off", score: 3 },
      { text: "Energized when deep in nature", score: 4 },
      { text: "Actively seek wilderness/as much as poss", score: 5 }
    ]
  },
  {
    id: 72,
    category: "Naturalist",
    text: "What is your interest in biology (plants/animals)?",
    options: [
      { text: "Little interest beyond basic utility", score: 1 },
      { text: "Like cute animals but don't study", score: 2 },
      { text: "Watch nature documentaries", score: 3 },
      { text: "Curious how different species grow", score: 4 },
      { text: "Passionate biology researcher", score: 5 }
    ]
  },
  {
    id: 73,
    category: "Naturalist",
    text: "How much do you care about environmental issues?",
    options: [
      { text: "Not a priority; don't follow news", score: 1 },
      { text: "Aware of climate but no habit change", score: 2 },
      { text: "Follow basic recycling/less plastic", score: 3 },
      { text: "Informed on crises and advocate change", score: 4 },
      { text: "Activist dedicated to conservation", score: 5 }
    ]
  },
  {
    id: 74,
    category: "Naturalist",
    text: "How much do you enjoy gardening or farming?",
    options: [
      { text: "Find soil/plants messy/boring", score: 1 },
      { text: "Help with chores if directed", score: 2 },
      { text: "Keep indoor plants/balcony garden", score: 3 },
      { text: "Green thumb; enjoy planting/harvest", score: 4 },
      { text: "Expert; understand soil/plant needs deeply", score: 5 }
    ]
  },
  {
    id: 75,
    category: "Naturalist",
    text: "How closely do you observe nature?",
    options: [
      { text: "Rarely notice trees/birds/weather", score: 1 },
      { text: "Notice major seasonal changes only", score: 2 },
      { text: "Identify local bird calls/common trees", score: 3 },
      { text: "Spot hidden animals/subtle shifts", score: 4 },
      { text: "Eagle-eyed observer of ecosystems", score: 5 }
    ]
  },
  {
    id: 76,
    category: "Naturalist",
    text: "What is your preferred learning environment?",
    options: [
      { text: "Focus better in quiet indoor classroom", score: 1 },
      { text: "Occasional field trips only", score: 2 },
      { text: "Nature view helps me think clearly", score: 3 },
      { text: "Learn significantly better outdoors", score: 4 },
      { text: "Struggle in cubicles; need outdoors", score: 5 }
    ]
  },
  {
    id: 77,
    category: "Naturalist",
    text: "How interested are you in Earth sciences (Geography)?",
    options: [
      { text: "Find terrain maps/geology boring", score: 1 },
      { text: "Like looking at cool landscapes", score: 2 },
      { text: "Interested how Earth was formed", score: 3 },
      { text: "Study weather/rock/global geography", score: 4 },
      { text: "Professional level geological interest", score: 5 }
    ]
  },
  {
    id: 78,
    category: "Naturalist",
    text: "How much do you enjoy studying ecosystems?",
    options: [
      { text: "Don't see species dependency", score: 1 },
      { text: "Understand basic concepts like food chain", score: 2 },
      { text: "Fascinated how changes affect habitats", score: 3 },
      { text: "Map relationships between species", score: 4 },
      { text: "Complex understanding of symbiosis", score: 5 }
    ]
  },
  {
    id: 79,
    category: "Naturalist",
    text: "How easily can you identify different species?",
    options: [
      { text: "Birds and trees all look same to me", score: 1 },
      { text: "Name common animals/garden flowers", score: 2 },
      { text: "Identify 10-20 local species", score: 3 },
      { text: "Distinguish between similar species", score: 4 },
      { text: "Walking encyclopedia of species", score: 5 }
    ]
  },
  {
    id: 80,
    category: "Naturalist",
    text: "How interested are you in sustainability?",
    options: [
      { text: "Prefer convenience over eco-choices", score: 1 },
      { text: "Buy 'eco-friendly' if available", score: 2 },
      { text: "Effort to reduce carbon footprint", score: 3 },
      { text: "Research sustainability of companies", score: 4 },
      { text: "Life designed around zero-waste", score: 5 }
    ]
  },

// =============================
// PREFERENCE QUESTIONS (81–92)
// =============================
  {
    id: 81,
    category: "Preference",
    text: "I like working with people.",
    options: [
      { text: "STRONGLY DISAGREE", score: 1 },
      { text: "DISAGREE", score: 2 },
      { text: "NEUTRAL", score: 3 },
      { text: "AGREE", score: 4 },
      { text: "STRONGLY AGREE", score: 5 }
    ]
  },
  {
    id: 82,
    category: "Preference",
    text: "I enjoy working with computers or technology.",
    options: [
      { text: "STRONGLY DISAGREE", score: 1 },
      { text: "DISAGREE", score: 2 },
      { text: "NEUTRAL", score: 3 },
      { text: "AGREE", score: 4 },
      { text: "STRONGLY AGREE", score: 5 }
    ]
  },
  {
    id: 83,
    category: "Preference",
    text: "I like solving maths or number problems.",
    options: [
      { text: "STRONGLY DISAGREE", score: 1 },
      { text: "DISAGREE", score: 2 },
      { text: "NEUTRAL", score: 3 },
      { text: "AGREE", score: 4 },
      { text: "STRONGLY AGREE", score: 5 }
    ]
  },
  {
    id: 84,
    category: "Preference",
    text: "I enjoy outdoor activities.",
    options: [
      { text: "STRONGLY DISAGREE", score: 1 },
      { text: "DISAGREE", score: 2 },
      { text: "NEUTRAL", score: 3 },
      { text: "AGREE", score: 4 },
      { text: "STRONGLY AGREE", score: 5 }
    ]
  },
  {
    id: 85,
    category: "Preference",
    text: "I like drawing, music, or creative work.",
    options: [
      { text: "STRONGLY DISAGREE", score: 1 },
      { text: "DISAGREE", score: 2 },
      { text: "NEUTRAL", score: 3 },
      { text: "AGREE", score: 4 },
      { text: "STRONGLY AGREE", score: 5 }
    ]
  },
  {
    id: 86,
    category: "Preference",
    text: "I like taking leadership responsibility.",
    options: [
      { text: "STRONGLY DISAGREE", score: 1 },
      { text: "DISAGREE", score: 2 },
      { text: "NEUTRAL", score: 3 },
      { text: "AGREE", score: 4 },
      { text: "STRONGLY AGREE", score: 5 }
    ]
  },
  {
    id: 87,
    category: "Preference",
    text: "I like helping people with their problems.",
    options: [
      { text: "STRONGLY DISAGREE", score: 1 },
      { text: "DISAGREE", score: 2 },
      { text: "NEUTRAL", score: 3 },
      { text: "AGREE", score: 4 },
      { text: "STRONGLY AGREE", score: 5 }
    ]
  },
  {
    id: 88,
    category: "Preference",
    text: "I enjoy speaking, presenting, or expressing ideas.",
    options: [
      { text: "STRONGLY DISAGREE", score: 1 },
      { text: "DISAGREE", score: 2 },
      { text: "NEUTRAL", score: 3 },
      { text: "AGREE", score: 4 },
      { text: "STRONGLY AGREE", score: 5 }
    ]
  },
  {
    id: 89,
    category: "Preference",
    text: "I like designing, building, or creating things.",
    options: [
      { text: "STRONGLY DISAGREE", score: 1 },
      { text: "DISAGREE", score: 2 },
      { text: "NEUTRAL", score: 3 },
      { text: "AGREE", score: 4 },
      { text: "STRONGLY AGREE", score: 5 }
    ]
  },
  {
    id: 90,
    category: "Preference",
    text: "I enjoy physical activities or sports.",
    options: [
      { text: "STRONGLY DISAGREE", score: 1 },
      { text: "DISAGREE", score: 2 },
      { text: "NEUTRAL", score: 3 },
      { text: "AGREE", score: 4 },
      { text: "STRONGLY AGREE", score: 5 }
    ]
  },
  {
    id: 91,
    category: "Preference",
    text: "I like science subjects or experiments.",
    options: [
      { text: "STRONGLY DISAGREE", score: 1 },
      { text: "DISAGREE", score: 2 },
      { text: "NEUTRAL", score: 3 },
      { text: "AGREE", score: 4 },
      { text: "STRONGLY AGREE", score: 5 }
    ]
  },
  {
    id: 92,
    category: "Preference",
    text: "I am interested in business, money, or management activities.",
    options: [
      { text: "STRONGLY DISAGREE", score: 1 },
      { text: "DISAGREE", score: 2 },
      { text: "NEUTRAL", score: 3 },
      { text: "AGREE", score: 4 },
      { text: "STRONGLY AGREE", score: 5 }
    ]
  }
];