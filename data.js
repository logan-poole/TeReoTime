// Complete database for Te Reo Time Resources - FULL VERSION

const DATA = {
    whakatauki: [
        {
            maori: "Whāia te iti kahurangi",
            english: "Seek the treasure you value most dearly",
            meaning: "This whakataukī encourages us to pursue our dreams and aspirations with determination. The 'iti kahurangi' (little treasure) refers to the precious things in life - whether they're goals, knowledge, relationships, or cultural connections. It reminds us not to be deterred by obstacles but to persist in seeking what truly matters to us.",
            context: "Often used to inspire rangatahi (youth) to pursue education and personal excellence."
        },
        {
            maori: "He aha te mea nui o te ao? He tangata, he tangata, he tangata",
            english: "What is the most important thing in the world? It is people, it is people, it is people",
            meaning: "This powerful whakataukī emphasizes that people are the most valuable resource we have. Material possessions and achievements pale in comparison to human relationships, community, and the wellbeing of others. It reflects the Māori worldview that places people and relationships at the center of everything.",
            context: "Frequently quoted in speeches and used to remind us of our priorities in life."
        },
        {
            maori: "Mā pango, mā whero, ka oti",
            english: "With black and red, the work is complete",
            meaning: "Black and red are significant colors in Māori culture, representing different groups or tribes working together. This whakataukī teaches that through cooperation and combining our different strengths and perspectives, we can accomplish great things. Unity and collaboration lead to completion and success.",
            context: "Used when discussing partnerships, teamwork, and collaborative projects."
        },
        {
            maori: "Kia kaha, kia māia, kia manawanui",
            english: "Be strong, be brave, be steadfast",
            meaning: "This triple encouragement calls for resilience in three dimensions: physical and mental strength (kaha), courage in the face of fear (māia), and patient endurance (manawanui). Together, these qualities help us face life's challenges with determination and grace.",
            context: "Often shared during difficult times or when someone needs encouragement."
        },
        {
            maori: "Ko au te awa, ko te awa ko au",
            english: "I am the river, and the river is me",
            meaning: "This whakataukī expresses the deep connection between people and the natural environment. It reflects the understanding that we are not separate from nature but are part of it. What affects the river affects us, and what we do affects the river. It speaks to environmental guardianship and our role as kaitiaki (guardians).",
            context: "Used in discussions about environmental protection and cultural identity."
        },
        {
            maori: "He waka eke noa",
            english: "A canoe which we are all in with no exception",
            meaning: "This whakataukī reminds us that we're all in this together - we share the same journey and fate. It emphasizes inclusivity, collective responsibility, and the importance of working together for the common good. No one is left behind; everyone has a place and role in the waka (canoe).",
            context: "Frequently used in discussions about unity, inclusion, and shared responsibility."
        },
        {
            maori: "Ehara taku toa i te toa takitahi, engari he toa takitini",
            english: "My strength is not that of an individual, but that of the collective",
            meaning: "This whakataukī acknowledges that our achievements are not solely our own but are built on the support, knowledge, and efforts of many people. It reflects the Māori concept of whānau (family) and community support, reminding us to be humble and recognize those who have helped us along our journey.",
            context: "Often spoken in acceptance speeches or when acknowledging support."
        },
        {
            maori: "Waiho i te toipoto, kaua i te toiroa",
            english: "Let us keep close together, not far apart",
            meaning: "This whakataukī emphasizes the importance of staying connected as a community rather than becoming scattered and distant. It speaks to maintaining strong relationships, regular communication, and collective unity. When we stay close, we can support each other better.",
            context: "Used when encouraging community cohesion and regular gatherings."
        },
        {
            maori: "Ka pū te ruha, ka hao te rangatahi",
            english: "The old net is cast aside, the new net goes fishing",
            meaning: "This whakataukī acknowledges the natural transition between generations. While respecting the old ways (the old net that served well), it recognizes that new generations must step up and take their place. It's about succession, growth, and the ongoing cycle of life and leadership.",
            context: "Used when discussing leadership transitions or generational change."
        },
        {
            maori: "Kia whakatomuri te haere whakamua",
            english: "I walk backwards into the future with my eyes fixed on my past",
            meaning: "This profound whakataukī expresses how Māori view time and progress. We move forward into the future while keeping our eyes on the past, learning from ancestors and history. The past provides guidance and wisdom for navigating what lies ahead. We don't abandon our heritage as we progress.",
            context: "Used when discussing cultural preservation and modern development."
        },
        {
            maori: "Tūwhitia te hopo, mairangatia te angitū",
            english: "Feel the fear and reach for success anyway",
            meaning: "This whakataukī encourages courage despite fear. It acknowledges that fear is natural but shouldn't prevent us from pursuing our goals. By pushing through our fears and taking action despite them, we can achieve success. It's about resilience and determination.",
            context: "Used to motivate people facing challenges or new endeavors."
        },
        {
            maori: "E kore te pātiki e hoki ki tōna puehu",
            english: "The flounder does not return to the place it has stirred up",
            meaning: "This whakataukī uses the flounder fish as a metaphor for learning from mistakes. Just as the flounder doesn't swim back into the murky water it has disturbed, we shouldn't repeat past errors. It's about growth, wisdom, and moving forward rather than repeating negative patterns.",
            context: "Used when advising someone to learn from past mistakes."
        },
        {
            maori: "He aroha whakatō, he aroha puta mai",
            english: "If kindness is sown, then kindness you will receive",
            meaning: "This whakataukī teaches the principle of reciprocity. The kindness, love, and care we give to others will return to us. It encourages generosity and compassion, reminding us that what we put out into the world comes back to us.",
            context: "Used when teaching children about kindness or discussing community values."
        },
        {
            maori: "He kai kei aku ringa",
            english: "There is food at the end of my hands",
            meaning: "This whakataukī speaks to self-reliance and capability. It means we have the skills, resources, and ability to provide for ourselves and others. Our hands can create, work, and produce what we need. It's about confidence in one's abilities and willingness to work.",
            context: "Used to encourage self-sufficiency and recognizing one's own capabilities."
        },
        {
            maori: "Kāore te kūmara e kōrero mō tōna ake reka",
            english: "The kūmara does not speak of its own sweetness",
            meaning: "This whakataukī teaches humility. Just as the sweet kūmara doesn't boast about its taste, we shouldn't brag about our own achievements or qualities. Let others recognize our worth. True excellence speaks for itself and doesn't require self-promotion.",
            context: "Used to teach humility and discourage boasting."
        },
        {
            maori: "Poipoia te kākano kia puawai",
            english: "Nurture the seed and it will blossom",
            meaning: "This whakataukī emphasizes the importance of careful nurturing and patience. Whether referring to children, relationships, projects, or ideas, everything needs proper care and time to grow and flourish. We must invest effort and patience to see results.",
            context: "Used when discussing education, child-rearing, or long-term projects."
        },
        {
            maori: "Whāngaihia te aroha kia tipu",
            english: "Feed love so it may grow",
            meaning: "Similar to nurturing a seed, this whakataukī teaches that love and relationships require ongoing attention and care. We must actively maintain and strengthen our bonds with others through kindness, time, and effort. Love doesn't sustain itself - it needs to be fed.",
            context: "Used in relationship advice and family discussions."
        },
        {
            maori: "Ahakoa he iti, he pounamu",
            english: "Although it is small, it is precious",
            meaning: "This whakataukī reminds us that value isn't determined by size. Pounamu (greenstone/jade) is treasured regardless of its size. Similarly, small acts, contributions, or people can have immense value. Don't underestimate something or someone based on appearance or scale.",
            context: "Used to acknowledge valuable contributions regardless of their scale."
        },
        {
            maori: "He iti hau marangai e tū te pāhokahoka",
            english: "After the storm, the rainbow appears",
            meaning: "This whakataukī offers hope during difficult times. Just as a beautiful rainbow follows a storm, better times follow hardship. It encourages perseverance through challenges, knowing that beauty, peace, and better days lie ahead.",
            context: "Used to provide comfort and hope during difficult times."
        },
        {
            maori: "Tangata akona ki te kāinga, tūnga ki te marae, tau ana",
            english: "A person taught at home will stand confidently on the marae",
            meaning: "This whakataukī emphasizes the importance of home education and upbringing. When children are properly taught values, protocols, and skills at home, they will carry themselves with confidence in public settings. Good foundations lead to success in all areas of life.",
            context: "Used when discussing the importance of family and home education."
        },
        {
            maori: "Me te kōpara e kō nei i te ata",
            english: "Like the bellbird singing in the morning",
            meaning: "The bellbird's clear, beautiful song in the morning symbolizes excellence, purity, and natural ability. This whakataukī is used to describe someone who performs with grace and skill, whose abilities shine naturally like the bellbird's melodious call.",
            context: "Used as a compliment for skillful performance or natural talent."
        },
        {
            maori: "Te amorangi ki mua, te hāpai ō ki muri",
            english: "The leader at the front, the supporters behind",
            meaning: "This whakataukī describes effective leadership and teamwork. A good leader goes first, showing the way and facing challenges, while supporters follow and maintain the work. It emphasizes that leadership and support are both essential and complementary roles.",
            context: "Used in discussions about leadership and organizational structure."
        },
        {
            maori: "Me mahi tahi tātou mō te oranga o te katoa",
            english: "We must work together for the wellbeing of all",
            meaning: "This whakataukī calls for collective action and cooperation for the common good. Individual success is meaningless if the community suffers. True wellbeing comes when everyone works together to ensure that all members of the community thrive.",
            context: "Used when organizing community initiatives or discussing social responsibility."
        },
        {
            maori: "He toi whakairo, he mana tangata",
            english: "Where there is artistic excellence, there is human dignity",
            meaning: "This whakataukī connects artistic expression to human dignity and cultural identity. Art, creativity, and cultural practices are not merely decorative but essential to our humanity and mana (prestige/dignity). They express who we are and maintain our cultural identity.",
            context: "Used when discussing the importance of arts and culture."
        },
        {
            maori: "E kore au e ngaro, he kākano i ruia mai i Rangiātea",
            english: "I will never be lost, for I am a seed sown from Rangiātea",
            meaning: "This powerful whakataukī speaks to cultural identity and ancestral connection. Rangiātea is the legendary homeland of Māori ancestors. This saying affirms that one's cultural roots and ancestral connections can never be erased - they are part of who we are, providing strength and identity.",
            context: "Used to affirm cultural identity and connection to ancestors."
        },
        {
            maori: "Ka whati te tai, ka pao te tōrea",
            english: "When the tide recedes, the oystercatcher strikes",
            meaning: "This whakataukī teaches about timing and opportunity. The oystercatcher bird waits for the right moment (low tide) to catch its food. Similarly, we must be patient and observant, ready to act decisively when opportunity presents itself.",
            context: "Used when discussing strategy, patience, and seizing opportunities."
        },
        {
            maori: "Nāu te rourou, nāku te rourou, ka ora ai te iwi",
            english: "With your food basket and mine, the people will thrive",
            meaning: "This whakataukī emphasizes the power of sharing and cooperation. When everyone contributes what they have - resources, knowledge, skills - the whole community benefits and thrives. No single person has everything, but together we have abundance.",
            context: "Used when discussing community cooperation and resource sharing."
        },
        {
            maori: "He iti te mokoroa nāna i kati te pūngāwerewere",
            english: "The small mokoroa grub can close the spider's web",
            meaning: "This whakataukī teaches that small or seemingly weak entities can overcome larger, stronger opponents through cleverness or determination. It's about not underestimating those who appear small or weak - they may have hidden strengths or strategies.",
            context: "Used to encourage underdogs or teach respect for all."
        },
        {
            maori: "Whāia te mātauranga hei oranga mō koutou",
            english: "Seek knowledge for your wellbeing",
            meaning: "This whakataukī emphasizes education as a path to prosperity and wellness. Knowledge - whether traditional or modern - empowers us and improves our lives. It encourages lifelong learning and values education as essential for personal and collective advancement.",
            context: "Used in educational settings and when encouraging learning."
        },
        {
            maori: "Mā te huruhuru ka rere te manu",
            english: "Adorn the bird with feathers so it may fly",
            meaning: "This whakataukī speaks to providing people with the tools, knowledge, and support they need to succeed. Just as a bird needs feathers to fly, people need proper preparation, education, and resources to reach their potential. We must equip others for success.",
            context: "Used when discussing education, mentorship, and preparation."
        },
        {
            maori: "Ki te kāhore he whakakitenga ka ngaro te iwi",
            english: "Without foresight or vision, the people will be lost",
            meaning: "This whakataukī emphasizes the critical importance of vision and planning. Leaders and communities need to look ahead, anticipate challenges, and plan for the future. Without vision and foresight, we wander aimlessly and face unnecessary hardship.",
            context: "Used when discussing leadership, strategic planning, and future planning."
        },
        {
            maori: "Kia tupato",
            english: "Be careful, be vigilant",
            meaning: "A simple but important reminder to stay aware and cautious. Whether facing physical danger, making decisions, or navigating relationships, attentiveness and care help us avoid mistakes and harm. It's practical wisdom for daily life.",
            context: "Used as advice or warning in various situations."
        },
        {
            maori: "He kākano āhau i ruia mai i Rangiātea",
            english: "I am a seed sown from Rangiātea",
            meaning: "This affirms one's connection to ancestors and cultural heritage. Rangiātea represents the ancestral homeland and origins of Māori people. This saying declares pride in ancestry and acknowledgment that we carry forward the legacy of those who came before.",
            context: "Used in pepeha (personal introductions) and cultural contexts."
        },
        {
            maori: "Kia kaha te reo",
            english: "Let the language be strong",
            meaning: "This modern whakataukī emphasizes the importance of maintaining and revitalizing te reo Māori. Language is the foundation of culture, and keeping it strong ensures cultural survival and identity. It's both a hope and a call to action.",
            context: "Used in language revitalization efforts and cultural events."
        },
        {
            maori: "Kia ora",
            english: "Be well, be healthy, greetings",
            meaning: "Perhaps the most widely known Māori phrase, 'kia ora' is both a greeting and a blessing. It wishes wellbeing and health upon others. The word 'ora' encompasses physical health, wellness, and vitality - it's a holistic wish for someone's wellbeing.",
            context: "Used as a greeting, farewell, thank you, and general positive acknowledgment."
        },
        {
            maori: "Aroha mai, aroha atu",
            english: "Love received, love given",
            meaning: "This whakataukī expresses the reciprocal nature of love and kindness. It speaks to the balance of giving and receiving aroha (love, compassion, empathy). Healthy relationships involve both receiving care and extending care to others.",
            context: "Used in discussions about relationships and reciprocity."
        },
        {
            maori: "He tangata takahi manuhiri, he marae puehu",
            english: "A person who mistreats guests will have a dusty marae",
            meaning: "This whakataukī emphasizes the importance of hospitality and treating visitors well. If you treat guests poorly, they won't return, and your marae (meeting ground) will become dusty from disuse. Proper hospitality ensures continued connection and community.",
            context: "Used when teaching about manaakitanga (hospitality) and guest protocols."
        },
        {
            maori: "Kia tau te mauri",
            english: "Let the life force settle",
            meaning: "Mauri refers to the life force or essence that binds all things. This saying calls for calm, peace, and balance to be restored. It's often used at the beginning or end of gatherings to settle the spiritual energy and create a peaceful atmosphere.",
            context: "Used in karakia (prayers) and formal occasions."
        },
        {
            maori: "Hōhonu kakī, papaku uaua",
            english: "Deep throat, shallow muscle",
            meaning: "This whakataukī criticizes those who talk big but lack the substance or action to back it up. Someone with a 'deep throat' (loud voice/big talk) but 'shallow muscle' (weak action) is all talk and no action. It's a gentle rebuke for empty boasting.",
            context: "Used to criticize empty promises or excessive boasting."
        },
        {
            maori: "Whāia ko te pae tawhiti",
            english: "Seek the distant horizon",
            meaning: "This whakataukī encourages ambition and reaching for high goals. Don't be satisfied with easy achievements nearby; instead, aim for the distant horizon - the challenging, worthy goals that require dedication and effort to reach.",
            context: "Used to inspire ambition and long-term thinking."
        },
        {
            maori: "He rangi tā matawhāiti, he rangi tā matawhānui",
            english: "A person with narrow vision sees a narrow horizon, a person with wide vision sees a wide horizon",
            meaning: "This whakataukī contrasts limited thinking with expansive thinking. Those who think narrowly see limited possibilities, while those who think broadly see many opportunities. It encourages open-mindedness and expansive vision.",
            context: "Used when encouraging broader thinking or criticizing narrow perspectives."
        },
        {
            maori: "I runga i te kōrero ka mōhio",
            english: "Through discussion comes understanding",
            meaning: "This whakataukī emphasizes the importance of communication and dialogue. By talking through issues, sharing perspectives, and listening to each other, we gain understanding and wisdom. Knowledge and clarity come through conversation.",
            context: "Used when encouraging dialogue or resolving disagreements."
        },
        {
            maori: "Kia ū ki te whakapono",
            english: "Hold firm to your beliefs",
            meaning: "This whakataukī encourages steadfastness in one's convictions and values. While remaining open to new ideas, it's important to maintain your core beliefs and principles. Stand strong in what you know to be right and true.",
            context: "Used when encouraging conviction or during challenging times."
        },
        {
            maori: "He pai rā anō te whakatā",
            english: "Rest is good",
            meaning: "A simple but important reminder that rest and recovery are valuable and necessary. In a culture that often emphasizes hard work and service, this whakataukī acknowledges that taking time to rest, reflect, and recharge is not only acceptable but important for wellbeing.",
            context: "Used when encouraging someone to rest or take a break."
        },
        {
            maori: "He taura whiri kotahi nā te kaupapa",
            english: "A rope woven from one purpose",
            meaning: "This whakataukī speaks to unity through shared purpose. When people are bound together by a common goal or vision, they become like a strong woven rope - many strands working together to create something stronger than any single strand.",
            context: "Used when discussing unity, teamwork, and shared goals."
        },
        {
            maori: "Kia whakakotahi tātou",
            english: "Let us be united",
            meaning: "A direct call for unity and togetherness. This whakataukī reminds us that strength comes from standing together, and that unity should be actively pursued and maintained. It's both a hope and an instruction.",
            context: "Used when calling for unity in communities or organizations."
        },
        {
            maori: "He puna wai, he puna kōrero",
            english: "A spring of water, a spring of conversation",
            meaning: "Just as a spring provides continuous fresh water, good conversation flows naturally and refreshes those involved. This whakataukī celebrates the value of stimulating dialogue and the natural flow of ideas that emerges in good company.",
            context: "Used to describe engaging conversations or gatherings."
        },
        {
            maori: "He wāhi nō te tangata",
            english: "Everyone has their place",
            meaning: "This whakataukī affirms that every person has value and a role to play. No one is without purpose or place in the community. It emphasizes inclusion and the recognition that each person contributes something unique and important.",
            context: "Used to affirm inclusion and individual value."
        },
        {
            maori: "He rā kei tua",
            english: "Better days lie ahead",
            meaning: "This hopeful whakataukī encourages optimism during difficult times. Even when things are hard now, better days are coming. It's a reminder to maintain hope and persevere through challenges, knowing that circumstances will improve.",
            context: "Used to provide hope and encouragement during hardship."
        },
        {
            maori: "Haere taka mua, taka muri",
            english: "Go stumbling forward, stumbling back",
            meaning: "This whakataukī acknowledges that learning and progress aren't linear. We stumble, make mistakes, sometimes move backward - and that's all part of the journey. Growth involves trial and error, and setbacks are natural and expected.",
            context: "Used when encouraging persistence through mistakes and setbacks."
        },
        {
            maori: "Tūturu whakamaua kia tīna",
            english: "Let it be permanently fixed and made fast",
            meaning: "This phrase is often used in karakia (prayers) to seal or confirm what has been said or done. It speaks to making something permanent, binding, and secure. It's a way of affirming and solidifying decisions, agreements, or spiritual work.",
            context: "Used at the end of karakia and formal proceedings."
        },
        {
            maori: "Ko te pae tawhiti whaia kia tata, ko te pae tata whakamaua kia tīna",
            english: "Seek out distant horizons and cherish those you attain",
            meaning: "This whakataukī balances ambition with appreciation. While we should pursue distant goals and dreams (the far horizon), we should also value and protect what we've already achieved (the near horizon). Ambition and gratitude work together.",
            context: "Used when discussing goal-setting and appreciation of achievements."
        },
        {
            maori: "Ehara i te mea he kotahi tangata nāna i toa",
            english: "Success is not the work of one but of many",
            meaning: "This whakataukī emphasizes collective achievement over individual glory. No one succeeds entirely on their own - we all rely on others' support, teaching, and contributions. It teaches humility and acknowledgment of community support.",
            context: "Used in speeches when acknowledging support and help received."
        },
        {
            maori: "Ka tū te rangatira i te wā o te raruraru",
            english: "A leader stands tall in times of trouble",
            meaning: "This whakataukī defines true leadership. Anyone can lead when times are easy, but authentic leaders show their character during difficulties. They stand firm, provide guidance, and remain steady when others need them most.",
            context: "Used when discussing leadership qualities and expectations."
        },
        {
            maori: "He kura te tangata",
            english: "People are treasures",
            meaning: "This simple but profound whakataukī declares that people are the most precious things we have. Like kura (treasured possessions), people should be valued, protected, and cherished. It emphasizes the primacy of human life and relationships.",
            context: "Used to emphasize human value and dignity."
        },
        {
            maori: "Kia mahara ki ngā tikanga",
            english: "Remember the protocols/customs",
            meaning: "This whakataukī reminds us to maintain and respect traditional practices and cultural protocols. Tikanga (correct procedures) have been passed down through generations for good reasons, and we should honor and preserve them.",
            context: "Used when teaching cultural protocols or reminding people of proper behavior."
        },
        {
            maori: "He tohu aroha",
            english: "A sign of love",
            meaning: "This phrase describes actions done as expressions of love and care. Whether it's a gift, service, or gesture, it's given not out of obligation but as a genuine sign of affection and care for another.",
            context: "Used when giving gifts or performing acts of service."
        },
        {
            maori: "Kaua e rangiruatia te hā o te hoe; e kore tō tātou waka e ū ki uta",
            english: "Do not lift the paddle out of unison or our canoe will never reach the shore",
            meaning: "This whakataukī emphasizes the importance of working together in harmony. Like paddlers in a waka (canoe), if we don't coordinate our efforts and work in rhythm, we won't reach our destination. Success requires synchronized teamwork.",
            context: "Used when encouraging teamwork and coordination in group efforts."
        },
        {
            maori: "He whakaputanga mōhio, he whakaputanga ora",
            english: "Knowledge is survival",
            meaning: "This whakataukī emphasizes that knowledge and learning are essential for survival and thriving. Understanding the world around us, learning from others, and acquiring skills are fundamental to our wellbeing and success.",
            context: "Used when encouraging education and knowledge-seeking."
        },
        {
            maori: "Ko te kai a te rangatira, he kōrero",
            english: "The food of chiefs is discussion",
            meaning: "This whakataukī teaches that leaders should be nourished by meaningful dialogue and discussion rather than just material comforts. True leadership involves listening, conversing, and learning from others through discussion.",
            context: "Used when discussing leadership and the importance of dialogue."
        },
        {
            maori: "Whāia te māramatanga",
            english: "Seek enlightenment/understanding",
            meaning: "This whakataukī encourages the pursuit of deeper understanding and wisdom. Māramatanga means enlightenment, clarity, and understanding. It's about seeking not just surface knowledge but profound comprehension.",
            context: "Used in educational and spiritual contexts."
        }
    ],

    maramataka: [
        {
            phase: "Whiro - Kōpū",
            days: "1-2",
            moon: "🌑",
            type: "Dark Moon / New Moon",
            energy: "Very Low - Rest Phase",
            description: "The darkest phase of the lunar cycle when the moon is completely hidden. This is a time of deep introspection, spiritual work, and renewal.",
            significance: "Whiro represents darkness and the unknown. In Māori cosmology, Whiro is associated with death, darkness, and hidden knowledge. This phase is considered sacred for spiritual practices.",
            good: [
                "Karakia (prayers) and spiritual practices",
                "Planning and strategizing for the month ahead",
                "Rest and personal recovery",
                "Internal reflection and meditation",
                "Seeking guidance from kaumātua (elders)",
                "Preparing tools and resources for future work"
            ],
            avoid: [
                "Major ceremonies or celebrations",
                "Starting new physical projects or construction",
                "Harvesting main food crops",
                "Public gatherings and large events",
                "Making important life decisions",
                "Traveling long distances"
            ],
            traditional: "Traditionally, people would not fish or plant during Whiro. It was a time for the community to gather quietly, share stories, and engage in spiritual learning. Tohunga (priests) would perform special karakia."
        },
        {
            phase: "Tirea - Pōkōkoto",
            days: "3-6",
            moon: "🌒",
            type: "Waxing Crescent / First Crescent",
            energy: "Growing - Growth Phase",
            description: "The first sliver of moon appears, bringing renewed energy and the promise of growth. Perfect for new beginnings and planting seeds.",
            significance: "Tirea marks the awakening of growth energy. The appearance of the new moon is celebrated as a sign of renewal and fresh starts. This is when the maramataka cycle truly begins.",
            good: [
                "Planting seeds and crops, especially kūmara",
                "Starting new projects and ventures",
                "Beginning healing rituals and treatments",
                "Establishing authority and leadership",
                "Holding significant discussions and decision-making",
                "New relationships and partnerships",
                "Initiating growth-focused activities",
                "Blessing new endeavours with karakia"
            ],
            avoid: [
                "Harvesting main crops (too early)",
                "Weaning children from breastfeeding",
                "Ending relationships or partnerships",
                "Destructive or demolition work",
                "Making permanent negative decisions",
                "Funeral rites (unless necessary)",
                "Ending or abandoning projects"
            ],
            traditional: "Tirea was a key traditional planting time. Hapū would organise planting expeditions to gardens, carrying kūmara carefully and planting them with karakia to ensure good growth. This was a time of hope and forward-looking activity."
        },
        {
            phase: "Ōrongonui",
            days: "7-10",
            moon: "🌓",
            type: "Waxing Gibbous / Peak Growth",
            energy: "Very High - Peak Phase",
            description: "The moon waxes powerfully toward fullness. This is a time of maximum growth energy and one of the most auspicious periods for important activities.",
            significance: "Ōrongonui represents strength, power, and abundance. Natural energy is at its peak, making it ideal for significant undertakings, ceremonies, and community work.",
            good: [
                "Important ceremonies and celebrations",
                "Sailing and ocean voyaging",
                "Major hui (gatherings) and meetings",
                "Educational activities and knowledge sharing",
                "Construction and building projects",
                "Establishing long-term projects and initiatives"
            ],
            avoid: [
                "Wasting time and opportunities",
                "Entering conflict or arguments during important hui",
                "Beginning poorly planned ventures"
            ],
            traditional: "During Ōrongonui, major voyages were undertaken. Waka (canoes) would set sail for long journeys. Important battles were fought. Major building projects like wharenui (meeting houses) were advanced. This was a time of action and achievement."
        },
        {
            phase: "Tangaroa - Kai Nui",
            days: "11-14",
            moon: "🌔",
            type: "Approaching Full Moon / Abundance",
            energy: "Very High - Harvest Phase",
            description: "The moon approaches its fullness, bringing energy perfect for gathering and harvesting. Food is abundant in nature.",
            significance: "Tangaroa is the atua (god) of the sea and all its creatures. This phase is associated with abundance, plenty, and successful gathering of resources, especially from the ocean.",
            good: [
                "Fishing expeditions (especially for sharks and large fish)",
                "Harvesting main crops and vegetables",
                "Gathering kai moana (seafood)",
                "Hunting in forests and mountains",
                "Collecting and preserving food",
                "Major feasts and food-sharing events"
            ],
            avoid: [
                "Planting new seeds or crops",
                "Starting new projects or ventures",
                "Spiritual initiation ceremonies",
                "Burials (if avoidable)",
                "Breaking ground on new construction"
            ],
            traditional: "Tangaroa nights were prime fishing time. Groups would prepare waka and fishing gear, setting out to sea for abundant catches. Eels would be caught in rivers. Birds would be hunted. Food would be preserved for winter months ahead."
        },
        {
            phase: "Ōturu - Rākaunui",
            days: "15",
            moon: "🌕",
            type: "Full Moon",
            energy: "Maximum - Sacred Phase",
            description: "The full moon - maximum illumination and spiritual power. This is the most sacred time in the maramataka, reserved for ceremony and celebration.",
            significance: "The full moon represents the peak of all energies - spiritual, physical, and emotional. It's a time when the veil between the physical and spiritual worlds is thinnest, making it powerful for ritual work.",
            good: [
                "Major sacred ceremonies and rituals",
                "Celebrations and festivals",
                "Spiritual initiation and dedication",
                "Honouring tūpuna (ancestors)",
                "Major community gatherings",
                "Tohunga performing powerful karakia",
                "Naming ceremonies for children",
                "Important announcements"
            ],
            avoid: [
                "Harvesting vegetables (they won't store well)",
                "Mundane everyday tasks and work",
                "Long-distance travel (stay for ceremony)",
                "Ordinary activities (this is sacred time)",
                "Arguments or conflict"
            ],
            traditional: "The full moon was marked by great gatherings on the marae. Tohunga would perform sacred rituals. Stories of ancestors would be shared. Waiata (songs) would be sung. Young people would be initiated into knowledge. This was a night to stay awake and honour the moon's power."
        },
        {
            phase: "Rakaunui",
            days: "16-19",
            moon: "🌖",
            type: "Waning Gibbous / Reflection",
            energy: "Moderate-High - Waning Phase",
            description: "The moon begins to wane, but energy remains high. This is a time for reflection, completion, and consolidating what has been achieved.",
            significance: "Rakaunui represents the balance between action and wisdom. The energy is still favourable for many activities, but there's a shift toward introspection and completing what has been started.",
            good: [
                "Completing ongoing projects",
                "Finishing harvests that were started",
                "Reflection on the month's events",
                "Planning for the next cycle",
                "Consolidating gains and achievements",
                "Teaching and sharing knowledge gained",
                "Preserving and storing food"
            ],
            avoid: [
                "Starting major new projects",
                "Beginning long journeys",
                "Planting seeds or crops",
                "Major ceremonies (save for full moon)",
                "Initiating new relationships"
            ],
            traditional: "During Rakaunui, communities would complete their harvesting work, preserve food, and begin preparing for the darker days ahead. It was a time to take stock of what had been achieved and give thanks."
        },
        {
            phase: "Tākirau",
            days: "20-23",
            moon: "🌗",
            type: "Last Quarter / Caution",
            energy: "Low - Decline Phase",
            description: "The moon continues to fade, and energy decreases. This is a time for caution, careful completion of work, and preparation for rest.",
            significance: "Tākirau is associated with waning power and the need for caution. Traditional wisdom advised against starting new ventures during this phase, as they would lack the energy needed for success.",
            good: [
                "Completing remaining tasks",
                "Rest and recovery",
                "Spiritual cleansing rituals",
                "Binding or protective work",
                "Ending cycles that need to close",
                "Preparing for the next dark moon",
                "Light maintenance work"
            ],
            avoid: [
                "Starting new projects or construction",
                "Major travel or journeys",
                "Ceremonies and celebrations",
                "Planting crops or seeds",
                "Making important life decisions",
                "Beginning new relationships"
            ],
            traditional: "Tākirau was a time to stay close to home, complete outstanding work, and prepare for the rest phase ahead. Fishing was generally avoided as catches would be poor. People would focus on domestic tasks and family time."
        },
        {
            phase: "Mutuwhenua",
            days: "24-29",
            moon: "🌘",
            type: "Waning Crescent / Deep Rest",
            energy: "Very Low - End Phase",
            description: "The moon fades to near darkness. This is the final rest phase before renewal, a time for deep spiritual work and internal healing.",
            significance: "Mutuwhenua represents the end of the cycle and preparation for rebirth. It's a sacred time for letting go of the old and preparing internally for the new cycle to begin.",
            good: [
                "Deep spiritual practices and meditation",
                "Spiritual cleansing and purification",
                "Internal healing work",
                "Karakia for renewal",
                "Preparing for the new cycle",
                "Resting and recovering energy",
                "Quiet contemplation and study"
            ],
            avoid: [
                "Physical labour or strenuous work",
                "Starting any new projects",
                "Travel or voyaging",
                "Harvesting food",
                "Public events or gatherings",
                "Making major decisions"
            ],
            traditional: "During Mutuwhenua, communities would rest, staying close to home and family. Tohunga would perform cleansing rituals to prepare for the new moon. Stories would be told around fires. This was a time of quietness and spiritual preparation."
        }
    ],

    days: [
        {
            maori: "Rāhina",
            english: "Monday",
            origin: "From 'Moon day' - adapted from English",
            meaning: "The name Rāhina comes from the English 'Monday' which itself comes from 'Moon day'. In te reo Māori, many day names were adapted from English after European contact, as traditionally Māori used lunar phases rather than a seven-day week.",
            traditional: "Traditionally, Māori did not use a seven-day week system. Time was measured by the maramataka (lunar calendar) and seasons. The introduction of day names came with European contact and Christianity."
        },
        {
            maori: "Rātū",
            english: "Tuesday",
            origin: "From 'Tiu's day' - Norse god of war",
            meaning: "Rātū is an adaptation of Tuesday. The English 'Tuesday' comes from 'Tiu' or 'Tiw', the Norse god of war. The Māori version maintains the phonetic sound while fitting Māori pronunciation patterns.",
            traditional: "As with all weekday names, this was adopted after European contact. The adaptation shows how te reo Māori incorporates new concepts while maintaining its linguistic structure."
        },
        {
            maori: "Rāapa",
            english: "Wednesday",
            origin: "From 'Woden's day' - Norse god",
            meaning: "Rāapa comes from Wednesday, which in English derives from Woden (or Odin), the Norse god. The Māori adaptation simplifies the pronunciation while keeping the recognizable sound.",
            traditional: "Wednesday marks the middle of the European work week, though traditionally Māori organized work and rest periods according to lunar phases rather than weekly cycles."
        },
        {
            maori: "Rāpare",
            english: "Thursday",
            origin: "From 'Thor's day' - Norse god of thunder",
            meaning: "Rāpare is adapted from Thursday, named after Thor, the Norse god of thunder. The adaptation follows Māori phonological rules while maintaining connection to the English name.",
            traditional: "In traditional times, activities were planned according to the maramataka rather than days of the week. The lunar calendar provided more specific guidance for different activities."
        },
        {
            maori: "Rāmere",
            english: "Friday",
            origin: "From 'Freya's day' - Norse goddess",
            meaning: "Rāmere comes from Friday, named after Freya (or Frigg), the Norse goddess of love. In many cultures, Friday marks the end of the work week and beginning of rest time.",
            traditional: "While now associated with the end of the work week, traditional Māori rest periods were more flexible and aligned with natural rhythms and the maramataka cycle."
        },
        {
            maori: "Rāhoroi",
            english: "Saturday",
            origin: "Literally means 'washing day'",
            meaning: "Rāhoroi is unique among the Māori day names as it has an actual Māori meaning: 'washing day' or 'day to wash' (horoi = to wash). This reflects the practical use of Saturday as a day for domestic tasks after the work week.",
            traditional: "The naming of Saturday as 'washing day' shows how Māori adapted new concepts (the seven-day week) with practical cultural meanings relevant to daily life."
        },
        {
            maori: "Rātapu",
            english: "Sunday",
            origin: "From 'tapu' meaning sacred/holy",
            meaning: "Rātapu means 'sacred day' or 'holy day' (tapu = sacred/restricted). This name reflects Sunday's significance in Christian tradition as the Sabbath, a day of rest and worship. Unlike other weekday names, this one uses a core Māori concept.",
            traditional: "The use of 'tapu' for Sunday shows the influence of Christianity on Māori culture. The concept of a sacred day of rest aligned with existing Māori concepts of tapu and sacred time."
        }
    ],

    numbers: {
        basic: [
            { number: 0, maori: "kore", meaning: "nothing/zero", notes: "Used for nothing, none, or zero" },
            { number: 1, maori: "tahi", meaning: "one", notes: "Basic unit, also used in 'kotahi' (one together)" },
            { number: 2, maori: "rua", meaning: "two", notes: "Also means pit/hole in other contexts" },
            { number: 3, maori: "toru", meaning: "three", notes: "Sacred number in many Māori contexts" },
            { number: 4, maori: "whā", meaning: "four", notes: "Represents the four winds, four directions" },
            { number: 5, maori: "rima", meaning: "five", notes: "Same word used for 'hand' (five fingers)" },
            { number: 6, maori: "ono", meaning: "six", notes: "Simple counting number" },
            { number: 7, maori: "whitu", meaning: "seven", notes: "Sacred number, Matariki has seven main stars" },
            { number: 8, maori: "waru", meaning: "eight", notes: "Simple counting number" },
            { number: 9, maori: "iwa", meaning: "nine", notes: "Simple counting number" },
            { number: 10, maori: "tekau", meaning: "ten", notes: "Base unit for teens and tens" }
        ],
        teens: [
            { number: 11, maori: "tekau mā tahi", meaning: "ten and one", notes: "Pattern: tekau + mā + number" },
            { number: 12, maori: "tekau mā rua", meaning: "ten and two", notes: "Continues the pattern" },
            { number: 13, maori: "tekau mā toru", meaning: "ten and three", notes: "'Mā' means 'and'" },
            { number: 14, maori: "tekau mā whā", meaning: "ten and four", notes: "Additive system" },
            { number: 15, maori: "tekau mā rima", meaning: "ten and five", notes: "Quarter hour" },
            { number: 16, maori: "tekau mā ono", meaning: "ten and six", notes: "Pattern continues" },
            { number: 17, maori: "tekau mā whitu", meaning: "ten and seven", notes: "Pattern continues" },
            { number: 18, maori: "tekau mā waru", meaning: "ten and eight", notes: "Pattern continues" },
            { number: 19, maori: "tekau mā iwa", meaning: "ten and nine", notes: "Last teen number" }
        ],
        tens: [
            { number: 20, maori: "rua tekau", meaning: "two tens", notes: "Pattern: number + tekau" },
            { number: 30, maori: "toru tekau", meaning: "three tens", notes: "Multiplication pattern" },
            { number: 40, maori: "whā tekau", meaning: "four tens", notes: "Pattern continues" },
            { number: 50, maori: "rima tekau", meaning: "five tens", notes: "Pattern continues" },
            { number: 60, maori: "ono tekau", meaning: "six tens", notes: "One hour" },
            { number: 70, maori: "whitu tekau", meaning: "seven tens", notes: "Pattern continues" },
            { number: 80, maori: "waru tekau", meaning: "eight tens", notes: "Pattern continues" },
            { number: 90, maori: "iwa tekau", meaning: "nine tens", notes: "Last tens number" }
        ],
        hundreds: [
            { number: 100, maori: "kotahi rau", meaning: "one hundred", notes: "Rau = hundred" },
            { number: 200, maori: "rua rau", meaning: "two hundred", notes: "Pattern: number + rau" },
            { number: 300, maori: "toru rau", meaning: "three hundred", notes: "Pattern continues" },
            { number: 1000, maori: "kotahi mano", meaning: "one thousand", notes: "Mano = thousand" },
            { number: 10000, maori: "kotahi mano tekau", meaning: "ten thousand", notes: "Large numbers" },
            { number: 1000000, maori: "kotahi miriona", meaning: "one million", notes: "From English 'million'" }
        ],
        examples: [
            { number: 21, maori: "rua tekau mā tahi", meaning: "two tens and one", construction: "20 + 1" },
            { number: 25, maori: "rua tekau mā rima", meaning: "two tens and five", construction: "20 + 5" },
            { number: 37, maori: "toru tekau mā whitu", meaning: "three tens and seven", construction: "30 + 7" },
            { number: 45, maori: "whā tekau mā rima", meaning: "four tens and five", construction: "40 + 5" },
            { number: 52, maori: "rima tekau mā rua", meaning: "five tens and two", construction: "50 + 2" },
            { number: 99, maori: "iwa tekau mā iwa", meaning: "nine tens and nine", construction: "90 + 9" },
            { number: 156, maori: "kotahi rau rima tekau mā ono", meaning: "one hundred five tens and six", construction: "100 + 50 + 6" },
            { number: 2025, maori: "rua mano rua tekau mā rima", meaning: "two thousand two tens and five", construction: "2000 + 20 + 5" }
        ]
    }
};
