const BAYANS = [
  {
    id: 1,
    title: "Importance of Salah",
    speaker: "Sheikh Muhammad Salah",
    category: "Fiqh",
    textContent:
      "Sheikh Muhammad Salah discusses the importance of performing Salah (prayer) in Islam. Salah is a fundamental pillar of Islam, and its performance has both spiritual and physical benefits that strengthen the believer's relationship with Allah and promote a sense of discipline and community.",
  },
  {
    id: 2,
    title: "Virtues of Dhikr",
    speaker: "Dr. Bilal Philips",
    category: "Spirituality",
    textContent:
      "Dr. Bilal Philips shares the virtues of engaging in Dhikr (remembrance of Allah). He explains how Dhikr purifies the soul, brings one closer to Allah, and is a source of peace and blessings. The bayan encourages consistent remembrance as a way to maintain a strong spiritual connection.",
  },
  {
    id: 3,
    title: "Dealing with Anger in Islam",
    speaker: "Nouman Ali Khan",
    category: "Fiqh",
    textContent:
      "Nouman Ali Khan provides guidance on controlling anger in line with Islamic teachings. He addresses the negative impacts of anger on one’s relationships and faith, and shares methods for managing anger by following the Prophet Muhammad’s (PBUH) advice on patience and forgiveness.",
  },
  {
    id: 4,
    title: "Tafseer of Surah Al-Fatiha",
    speaker: "Mufti Menk",
    category: "Quran",
    textContent:
      "Mufti Menk delivers an insightful Tafseer of the opening chapter of the Quran, Surah Al-Fatiha. He explains the meanings of each verse, highlighting the significance of seeking guidance from Allah and recognizing His mercy and majesty.",
  },
  {
    id: 5,
    title: "Etiquettes of Seeking Knowledge",
    speaker: "Dr. Assim Al-Hakeem",
    category: "Fiqh",
    textContent:
      "Dr. Assim Al-Hakeem discusses proper etiquettes for students of knowledge, including humility, patience, and respect for teachers. He emphasizes that seeking knowledge is a form of worship and should be pursued with sincerity and dedication.",
  },
  {
    id: 6,
    title: "Understanding Hadith Terminology",
    speaker: "Shaykh Uthaymeen",
    category: "Hadith",
    textContent:
      "Shaykh Uthaymeen explains various terminologies in the science of Hadith, including terms like Sahih, Da'if, and Hasan. This bayan provides foundational knowledge for understanding the classification and authenticity of Hadith.",
  },
  {
    id: 7,
    title: "Lessons from the Life of Prophet Ibrahim",
    speaker: "Yasir Qadhi",
    category: "Quran",
    textContent:
      "Yasir Qadhi explores lessons from the life of Prophet Ibrahim (Abraham), focusing on his unwavering faith, his trials, and his dedication to monotheism. The bayan encourages listeners to embody these qualities in their own lives.",
  },
  {
    id: 8,
    title: "The Ruling on Music in Islam",
    speaker: "Mufti Abu Layth",
    category: "Fiqh",
    textContent:
      "Mufti Abu Layth discusses the Islamic ruling on music and various scholarly opinions. He delves into the different perspectives on permissibility and offers guidance for Muslims seeking to understand this complex topic.",
  },
  {
    id: 9,
    title: "Prophet Muhammad's Mercy Towards Children",
    speaker: "Shaykh Yasir Birjas",
    category: "Seerah",
    textContent:
      "Shaykh Yasir Birjas explains Prophet Muhammad’s (PBUH) compassion towards children, highlighting examples from his life where he demonstrated kindness, patience, and love. The bayan emphasizes the importance of nurturing children with compassion in Islam.",
  },
  {
    id: 10,
    title: "Islamic Perspective on Wealth and Poverty",
    speaker: "Imam Suhaib Webb",
    category: "Fiqh",
    textContent:
      "Imam Suhaib Webb discusses Islam’s views on wealth, poverty, and balance. He explains the responsibilities of wealth, the importance of gratitude, and the rewards of charity, encouraging a balanced approach to material wealth.",
  },
  {
    id: 11,
    title: "Patience and Perseverance in Islam",
    speaker: "Mufti Ismail Menk",
    category: "Spirituality",
    textContent:
      "Mufti Menk discusses patience (sabr) and its role in Islamic faith. He shares examples from the lives of the prophets and encourages steadfastness through trials, reminding listeners of the rewards promised for those who are patient.",
  },
  {
    id: 12,
    title: "Modesty in Islam",
    speaker: "Sheikh Omar Suleiman",
    category: "Character",
    textContent:
      "Sheikh Omar Suleiman explores the value of modesty in Islam and how to practice it. He explains how modesty, both in behavior and appearance, is a sign of faith and a means to avoid societal ills and maintain dignity.",
  },
  {
    id: 13,
    title: "Importance of Tawheed (Monotheism)",
    speaker: "Dr. Zakir Naik",
    category: "Aqeedah",
    textContent:
      "Dr. Zakir Naik discusses Tawheed, the core belief in one God, and its implications. He explains why monotheism is central to Islam and its effect on one's relationship with Allah, as well as the consequences of shirk (associating partners with Allah).",
  },
  {
    id: 14,
    title: "Dealing with Grief and Loss",
    speaker: "Imam Omar Suleiman",
    category: "Spirituality",
    textContent:
      "Imam Omar Suleiman provides comfort and guidance on handling grief. He encourages reliance on Allah during times of loss, offering stories from the Quran and Hadith to highlight patience and acceptance.",
  },
  {
    id: 15,
    title: "Rights of Parents in Islam",
    speaker: "Sheikh Yassir Fazaga",
    category: "Family",
    textContent:
      "Sheikh Yassir Fazaga highlights the rights of parents in Islam and the importance of treating them with respect and kindness. He explains the rewards of dutifulness to parents and the value of seeking their blessings.",
  },
  {
    id: 16,
    title: "Balancing Faith and Work",
    speaker: "Ustadh Nouman Ali Khan",
    category: "Lifestyle",
    textContent:
      "Ustadh Nouman Ali Khan provides practical advice on balancing religious duties with professional responsibilities. He emphasizes setting priorities and organizing time to maintain both worldly and spiritual obligations.",
  },
  {
    id: 17,
    title: "The Significance of Hajj",
    speaker: "Mufti Menk",
    category: "Hajj",
    textContent:
      "Mufti Menk discusses the significance of Hajj, the pilgrimage to Mecca, as a pillar of Islam. He explains the rituals, their meanings, and the importance of self-reflection and humility during Hajj.",
  },
  {
    id: 18,
    title: "Maintaining Faith in Adversity",
    speaker: "Dr. Tariq Ramadan",
    category: "Spirituality",
    textContent:
      "Dr. Tariq Ramadan talks about the importance of keeping faith strong during difficult times. He encourages resilience, the practice of prayer, and constant reliance on Allah for strength and guidance.",
  },
  {
    id: 19,
    title: "The Role of Youth in Islam",
    speaker: "Sheikh Yasir Qadhi",
    category: "Youth",
    textContent:
      "Sheikh Yasir Qadhi addresses the vital role of youth in Islam, encouraging them to be active in positive social change, adhere to Islamic values, and seek knowledge. He highlights the potential of young people to impact the world.",
  },
  {
    id: 20,
    title: "The Importance of Family in Islam",
    speaker: "Imam Omar Suleiman",
    category: "Family",
    textContent:
      "Imam Omar Suleiman discusses the significance of family in Islam, highlighting family values, the roles of family members, and the mutual support and compassion emphasized in Islamic teachings.",
  },
  {
    id: 21,
    title: "The Concept of Taqwa in Islam",
    speaker: "Shaykh Hamza Yusuf",
    category: "Spirituality",
    textContent:
      "Shaykh Hamza Yusuf elaborates on Taqwa, the consciousness and fear of Allah, as a core concept in Islam. He explains how Taqwa acts as a moral compass, guiding Muslims toward righteousness and away from sinful behaviors, and emphasizes its importance in the Quran.",
  },
  {
    id: 22,
    title: "Benefits of Quranic Recitation",
    speaker: "Imam Khalid Latif",
    category: "Quran",
    textContent:
      "Imam Khalid Latif discusses the spiritual and mental benefits of reciting the Quran. He encourages regular recitation as a means to find peace, receive blessings, and strengthen one's connection to Allah. The bayan highlights the impact of the Quran on a Muslim's daily life.",
  },
  {
    id: 23,
    title: "Maintaining Good Character",
    speaker: "Dr. Omar Suleiman",
    category: "Character",
    textContent:
      "Dr. Omar Suleiman speaks on the importance of good character in Islam. He explains that being kind, patient, and truthful reflects the essence of Islam and is an essential part of a Muslim's faith. He provides guidance on how to develop these qualities in daily life.",
  },
  {
    id: 24,
    title: "Significance of Eid in Islam",
    speaker: "Mufti Ismail Menk",
    category: "Islamic Festivals",
    textContent:
      "Mufti Ismail Menk talks about the significance of Eid, including both Eid al-Fitr and Eid al-Adha, as important celebrations in Islam. He describes how these festivals serve as times for gratitude, community, and charity, uniting Muslims worldwide in joy and worship.",
  },
  {
    id: 25,
    title: "Shaytan’s Influence and How to Avoid It",
    speaker: "Dr. Bilal Philips",
    category: "Aqeedah",
    textContent:
      "Dr. Bilal Philips explains how Shaytan (Satan) influences human behavior and ways to guard oneself against his whispers. He highlights practical steps like seeking refuge in Allah, performing regular prayers, and increasing knowledge to counter negative influences.",
  },
  {
    id: 26,
    title: "Fasting Beyond Ramadan",
    speaker: "Sheikh Yasir Qadhi",
    category: "Fiqh",
    textContent:
      "Sheikh Yasir Qadhi encourages fasting beyond the month of Ramadan, explaining the benefits of voluntary fasts on special days like Mondays and Thursdays, Ashura, and Arafah. The bayan underscores fasting as an act that purifies the soul and earns great rewards.",
  },
  {
    id: 27,
    title: "The Power of Dua in Islam",
    speaker: "Shaykh Yasir Birjas",
    category: "Spirituality",
    textContent:
      "Shaykh Yasir Birjas discusses the power of Dua (supplication) and its role in a Muslim's life. He provides guidance on how to make effective duas and the etiquette of supplicating, encouraging Muslims to turn to Allah for all their needs and desires.",
  },
  {
    id: 28,
    title: "Understanding the Hereafter",
    speaker: "Dr. Zakir Naik",
    category: "Aqeedah",
    textContent:
      "Dr. Zakir Naik provides insights into the Islamic understanding of the Hereafter, including the Day of Judgment, Paradise, and Hellfire. He explains how awareness of the Hereafter motivates a Muslim to live a righteous life and fulfill religious obligations.",
  },
  {
    id: 29,
    title: "The Role of Women in Islam",
    speaker: "Sheikh Omar Suleiman",
    category: "Society",
    textContent:
      "Sheikh Omar Suleiman discusses the role and rights of women in Islam, highlighting their spiritual equality and contributions to society. The bayan emphasizes respect, education, and empowerment as integral parts of Islam’s teachings on women.",
  },
  {
    id: 30,
    title: "Developing Trust in Allah (Tawakkul)",
    speaker: "Mufti Menk",
    category: "Spirituality",
    textContent:
      "Mufti Menk explains the concept of Tawakkul, or trust in Allah, in every situation. He shares examples from the lives of the prophets to illustrate the importance of relying on Allah’s plan, even in the face of difficulty, and encourages acceptance and patience.",
  },
  {
    id: 31,
    title: "Adopting Sunnah in Daily Life",
    speaker: "Shaykh Yasir Qadhi",
    category: "Lifestyle",
    textContent:
      "Shaykh Yasir Qadhi provides practical advice on incorporating Sunnah, the practices of Prophet Muhammad (PBUH), into daily routines. He explains the benefits of following Sunnah, from personal hygiene to prayer habits, as a way to strengthen faith.",
  },
  {
    id: 32,
    title: "The Journey of Hajj",
    speaker: "Sheikh Hamza Yusuf",
    category: "Hajj",
    textContent:
      "Sheikh Hamza Yusuf explains the journey of Hajj, including the rituals, significance, and profound impact it has on a Muslim's life. The bayan highlights the themes of unity, submission, and reflection that Hajj instills in those who undertake the pilgrimage.",
  },
  {
    id: 33,
    title: "Handling Trials and Hardships",
    speaker: "Dr. Omar Suleiman",
    category: "Spirituality",
    textContent:
      "Dr. Omar Suleiman discusses how to approach trials and hardships with patience and faith. He encourages reliance on Allah and provides examples from the lives of the prophets to illustrate the value of resilience and seeking Allah’s help.",
  },
  {
    id: 34,
    title: "The Importance of Justice in Islam",
    speaker: "Imam Suhaib Webb",
    category: "Society",
    textContent:
      "Imam Suhaib Webb talks about the emphasis Islam places on justice and fairness. He explains how Muslims are urged to uphold justice in personal conduct, social interactions, and within communities, as a reflection of true Islamic values.",
  },
  {
    id: 35,
    title: "Obligations of a Muslim Towards Neighbors",
    speaker: "Sheikh Yasir Birjas",
    category: "Fiqh",
    textContent:
      "Sheikh Yasir Birjas highlights the responsibilities a Muslim has towards neighbors. He emphasizes kindness, support, and respect for neighbors, regardless of their religion, as important components of Islamic character and community-building.",
  },
  {
    id: 36,
    title: "Understanding Islamic Inheritance",
    speaker: "Dr. Bilal Philips",
    category: "Fiqh",
    textContent:
      "Dr. Bilal Philips provides an overview of Islamic inheritance laws, explaining their wisdom and importance. He addresses common questions and misconceptions, illustrating how these rules ensure fairness and respect for family ties.",
  },
  {
    id: 37,
    title: "Unity Among Muslims",
    speaker: "Sheikh Yasir Qadhi",
    category: "Society",
    textContent:
      "Sheikh Yasir Qadhi calls for unity among Muslims, highlighting the Quranic emphasis on brotherhood and solidarity. He explains the importance of setting aside differences to focus on shared beliefs and building a strong, supportive community.",
  },
  {
    id: 38,
    title: "The Role of Parents in a Child's Faith",
    speaker: "Shaykh Yasir Birjas",
    category: "Family",
    textContent:
      "Shaykh Yasir Birjas discusses the role of parents in nurturing a child’s faith. He emphasizes the importance of providing an Islamic environment, teaching core values, and setting a good example for children to develop strong moral foundations.",
  },
  {
    id: 39,
    title: "The Rewards of Fasting",
    speaker: "Mufti Menk",
    category: "Spirituality",
    textContent:
      "Mufti Menk explains the spiritual rewards of fasting, not only during Ramadan but also on other recommended days. He discusses fasting as a means of purification, self-discipline, and nearness to Allah, encouraging Muslims to adopt it as a regular practice.",
  },
  {
    id: 40,
    title: "The Prophetic Approach to Education",
    speaker: "Imam Khalid Latif",
    category: "Education",
    textContent:
      "Imam Khalid Latif explores the methods used by Prophet Muhammad (PBUH) in educating his companions. He emphasizes kindness, patience, and practical application, encouraging educators to adopt a holistic approach that nurtures both knowledge and character.",
  },
  {
    id: 41,
    title: "The Importance of Charity in Islam",
    speaker: "Sh. Yasir Birjas",
    category: "Fiqh",
    textContent:
      "Sh. Yasir Birjas emphasizes the significance of charity in Islam, explaining how giving to others purifies wealth, uplifts the community, and earns blessings from Allah. Charity is described as a fundamental act of worship that benefits both the giver and the receiver.",
  },
];

export default BAYANS;
