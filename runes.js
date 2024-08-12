class Runes {
    static allRunes = [
			// ["Arcane Master Rune"],
			["Glory Element Rune","Atk","Buff","Any"],
			["Soul Burst Rune","Atk","Buff","Any"],
			["Energy Protection Rune","Def","Def","Any"],
			["Frost Curse Rune","Def","Buff","Any"],
			["Final Land Rune","Atk","Def","Any"],
			["Thunder Bash Rune","Atk","Buff","Any"],
			["Endless Snowstorm Rune","Atk","Buff","Any"],
			["Soul Elegy Rune","Atk","Atk","Buff"],
			["Nether Prison Rune","Atk","Def","Buff"],
			["Soul Vortex Rune","Atk","Atk","Buff"],
			["Comet Meteor Rune","Atk","Def","Buff"],
			["Shattered Falling Star Rune","Atk","Atk","Def"],
			["Cretaceous Barrier Rune","Def","Def","Buff"],
			["Thunder Lightning Rune","Atk","Atk","Buff"],
			["Heart Vortex - Star Rune","Atk","Atk","Buff"],
			["Flare Protection - Star Rune","Atk","Def","Buff"],
			["Quick Sand Confinement - Star Rune","Atk","Def","Buff"],
			// ["Chronomancer Rune"],
			["Rage Magic Rune","Atk","Atk","Any"],
			["Warm Breeze Rune","Def","Def","Any"],
			["Magic Blend Rune","Def","Buff","Any"],
			["Light Blade Rune","Atk","Buff","Any"],
			["Soul Pounding Rune","Atk","Atk","Any"],
			["Starlight Drill Rune","Atk","Def","Any"],
			["Elemental Magic Arrow Rune","Atk","Atk","Any"],
			["Mental Disruption Rune","Atk","Atk","Buff"],
			["Protecting Wind Rune","Def","Def","Buff"],
			["Field Lord Rune","Atk","Def","Def"],
			["Sufficient Magic Energy Rune","Atk","Atk","Buff"],
			["Blast Light Rune","Atk","Buff","Buff"],
			["Shiny Star Rune","Atk","Def","Buff"],
			["Painful Torture Rune","Atk","Buff","Def"],
			["Time Streamer - Star Rune","Atk","Def","Buff"],
			["Sky Tranquil - Star Rune","Atk","Def","Buff"],
			["Twisted Fission - Star Rune","Atk","Buff","Buff"],
			// ["Runemaster Rune"],
			["Power Strike Rune","Atk","Buff","Any"],
			["Flame Roar Rune","Def","Buff","Any"],
			["Swift Riding Rune","Def","Buff","Any"],
			["Storm Surge Rune","Atk","Buff","Any"],
			["Gale Thorn Rune","Atk","Atk","Any"],
			["Steel Guardian Rune","Def","Def","Any"],
			["Rapid Spiral Rune","Atk","Buff","Any"],
			["Weapon Blocking Rune","Def","Def","Buff"],
			["Fortitude Mark Rune","Atk","Def","Buff"],
			["Berserk Breath Rune","Atk","Atk","Buff"],
			["Crazy Strike Rune","Atk","Atk","Buff"],
			["Etched Mark Rune","Atk","Def","Buff"],
			["Anger Reflux Rune","Atk","Def","Buff"],
			["Joint Beat Rune","Atk","Atk","Buff"],
			["Death Cage - Star Rune","Atk","Atk","Buff"],
			["Darkness Awakening - Star Rune","Atk","Def","Buff"],
			["Dark Dragon Flame - Star Rune","Atk","Def","Buff"],
			["Powerful frenezy - Star Rune","Atk","Def","Buff"],
			// ["Divine Avenger Rune"],
			["Steel Commandment Rune","Def","Buff","Any"],
			["Shield Charge Rune","Atk","Atk","Any"],
			["Gale Whirl Rune","Atk","Buff","Any"],
			["Saint Chant Rune","Def","Def","Any"],
			["Iron Hoof Rune","Atk","Buff","Any"],
			["Brilliant Justice Rune","Atk","Buff","Any"],
			["Fearless Heart Rune","Def","Def","Any"],
			["Blood Sacrifice Rune","Atk","Atk","Buff"],
			["Solid Barrier Rune","Def","Def","Buff"],
			["Righteous Rune","Def","Def","Buff"],
			["Charging Leader Rune","Atk","Def","Buff"],
			["Fortitude Shield Rune","Atk","Def","Def"],
			["Blood Cross Rune","Atk","Atk","Buff"],
			["Steel Protection Rune","Def","Def","Buff"],
			["Persistent Counterattack - Star Rune","Atk","Def","Buff"],
			["Reckless Raid - Star Rune","Atk","Def","Buff"],
			["Brilliant Retribution - Star Rune","Atk","Atk","Buff"],
			// ["Blade Soul Rune"],
			["Nightmare Combo Rune","Atk","Atk","Any"],
			["Shadowless Rune","Atk","Atk","Any"],
			["Breath Holding Rune","Def","Buff","Any"],
			["Void Poison Rune","Def","Def","Any"],
			["Soul Paralysis Rune","Atk","Buff","Any"],
			["Cross Destruction Rune","Atk","Atk","Any"],
			["Rage Breaker Rune","Atk","Buff","Any"],
			["Hurricane Rune","Atk","Def","Def"],
			["Crusading Rune","Atk","Atk","Buff"],
			["Soul Assassination Rune","Atk","Def","Buff"],
			["Refinement Rune","Atk","Atk","Buff"],
			["Storm Parry Rune","Atk","Def","Def"],
			["Fierce Armor Breaking Rune","Atk","Def","Buff"],
			["Death Wound Rune","Atk","Def","Buff"],
			["Spirit Sigh - Star Rune","Atk","Def","Buff"],
			["Soul Hunting Pact - Star Rune","Atk","Atk","Buff"],
			["Enchanting Chain - Star Rune","Atk","Buff","Buff"],
			// ["Phantom Dance Rune" ],
			["Accurate Shooting Rune","Atk","Buff","Any"],
			["Dexterous Capture Rune","Def","Def","Any"],
			["Overlord's Soul Rune","Atk","Def","Any"],
			["Rapid Continuous Shooting Rune","Atk","Atk","Any"],
			["Mind Confusion Rune","Atk","Def","Any"],
			["Arrow Combo Rune","Atk","Buff","Any"],
			["Soul Intimidation Rune","Def","Def","Any"],
			["Equipment Removing Rune","Atk","Def","Buff"],
			["Death Notice Rune","Atk","Def","Buff"],
			["Dark Tracking Rune","Atk","Def","Def"],
			["Shadow Spike Rune","Atk","Atk","Buff"],
			["Magic Forbidden Field Rune","Atk","Atk","Buff"],
			["Death Infection Rune","Atk","Def","Buff"],
			["Soul Cracking Assault Rune","Atk","Def","Buff"],
			["Blurred Light and Shadow - Star Rune","Atk","Def","Buff"],
			["Dark Shadow Sacrifice Ceremony - Star Rune","Def","Def","Buff"],
			["Perfect Recurrence - Star Rune","Buff","Buff","Buff"],
			// ["Stellar Hunter Rune"],
			["Shadow Sniper Rune","Atk","Atk","Any"],
			["Death Trap Rune","Atk","Buff","Any"],
			["Precision Sniper Rune","Atk","Buff","Any"],
			["Rapid Shoes Rune","Def","Def","Any"],
			["Arrow Storm Rune","Atk","Buff","Any"],
			["Impact Electro-optic Rune","Atk","Atk","Any"],
			["Concentrated Blow Rune","Atk","Def","Any"],
			["Shadow Tracking Rune","Atk","Atk","Def"],
			["Craftsman's Rune","Atk","Def","Buff"],
			["Forest Elf Rune","Def","Def","Buff"],
			["Assassin's Rune","Atk","Atk","Buff"],
			["Trap Specialization Rune","Atk","Buff","Buff"],
			["Beast Speed Up Rune","Atk","Buff","Buff"],
			["Animal Master Rune","Atk","Buff","Buff"],
			["Excellent State - Star Rune","Atk","Def","Buff"],
			["Comet Light Fission - Star Rune","Atk","Atk","Buff"],
			["Dark Night Trap - Star Rune","Atk","Def","Buff"],
			// ["Solar Trouvere Rune"],
			["Assault Song Rune","Atk","Buff","Any"],
			["Prophecy Poetry Rune","Def","Buff","Any"],
			["Trembling Echo Rune","Atk","Atk","Any"],
			["Repetition Voice Rune","Def","Buff","Any"],
			["Nature Echo Rune","Def","Buff","Any"],
			["Morning Dew Voice Rune","Def","Buff","Any"],
			["Arrow Dance Rune","Atk","Buff","Any"],
			["Rapid Storm Rune","Atk","Atk","Buff"],
			["Violent Storm Rune","Atk","Def","Buff"],
			["Forbidden Fruit Rune","Def","Def","Buff"],
			["Ensemble Echo Rune","Def","Buff","Buff"],
			["Rhythmic Rune","Atk","Def","Buff"],
			["Fate Divination Rune","Atk","Def","Buff"],
			["Twilight Tune Rune","Atk","Atk","Buff"],
			["Eulogy Poem - Star Rune","Atk","Def","Buff"],
			["Sun Moon Lament - Star Rune","Atk","Buff","Buff"],
			["Light Bathing Echo - Star Rune","Atk","Buff","Buff"],
			// ["Luna Danseuse Rune"],
			["Ripple Sound Rune","Atk","Atk","Any"],
			["Streamer Nocturne Rune","Atk","Buff","Any"],
			["Sacred Kiss Rune","Atk","Buff","Any"],
			["Dewy Morning Rune","Def","Buff","Any"],
			["Initial Heart Rune","Def","Buff","Any"],
			["Life Echo Rune","Def","Buff","Any"],
			["Blood Dance Arrow Rune","Atk","Buff","Any"],
			["Phonological Rune","Atk","Def","Buff"],
			["Killing Puppet Rune","Buff","Buff","Buff"],
			["Gale and Swift Rain Rune","Atk","Def","Buff"],
			["Storm in Rain Rune","Atk","Atk","Buff"],
			["Distant Sky Sunset Rune","Atk","Atk","Buff"],
			["Tarot in Dreams Rune","Atk","Def","Buff"],
			["Selfless Rune","Def","Def","Buff"],
			["Moon Aria Echo - Star Rune","Atk","Buff","Buff"],
			["God's Favor - Star Rune","Def","Def","Buff"],
			["Demise Incurring - Star Rune","Atk","Buff","Buff"],
			// ["Saint Rune"],
			["Divine Grace Cross Rune","Atk","Buff","Any"],
			["Silent Judex Rune","Atk","Atk","Any"],
			["Exorcism Messenger Rune","Atk","Atk","Any"],
			["Silent Prayer Rune","Atk","Atk","Any"],
			["Difficult Steps Rune","Buff","Buff","Any"],
			["Pious Sin Rune","Atk","Atk","Any"],
			["Gospel Adoramus Rune","Atk","Buff","Any"],
			["Dark Rival Rune","Atk","Atk","Buff"],
			["Divine Healing Rune","Def","Def","Buff"],
			["Glow Blessing Rune","Def","Def","Def"],
			["Light Detoxification Rune","Def","Def","Buff"],
			["Pray Adoramus Rune","Atk","Def","Buff"],
			["Light and Shadow Rune","Atk","Atk","Buff"],
			["Blessing Rune","Atk","Def","Buff"],
			["Night God Baptism - Star Rune","Atk","Buff","Buff"],
			["Nemesis Hammer - Star Rune","Atk","Def","Buff"],
			["Light Prayer - Star Rune","Def","Def","Buff"],
            ["Night God Baptism - Star Rune","Atk","Buff","Buff"],
			// ["Dragon Fist Rune"],
			["Storm Condensation Rune","Buff","Buff","Any"],
			["Rage Roar Rune","Def","Buff","Any"],
			["Power Soak Rune","Atk","Buff","Any"],
			["Triple Attack Rune","Atk","Atk","Any"],
			["No Heart Demon Rune","Atk","Buff","Any"],
			["Destruction Fist Rune","Atk","Buff","Any"],
			["Fearless Steel Rune","Atk","Atk","Any"],
			["Bomb Explosion Rune","Atk","Atk","Buff"],
			["Indestructibility Rune","Atk","Def","Def"],
			["Nirvana Rune","Atk","Atk","Buff"],
			["Magic Saver Rune","Atk","Atk","Buff"],
			["Swift Flash Rune","Atk","Buff","Buff"],
			["Soul Awakening Rune","Atk","Def","Buff"],
			["Concentration Rune","Atk","Def","Buff"],
			["Sky Piercer - Star Rune","Atk","Def","Buff"],
			["Dragon Soul Immortal - Star Rune","Atk","Def","Buff"],
			["Gale Lightning - Star Rune","Atk","Atk","Buff"],
			// ["Lightbringer Rune"],
			["Soul Shout Rune","Buff","Buff","Any"],
			["Iron Fist Rune","Atk","Buff","Any"],
			["Violent Assault Rune","Atk","Buff","Any"],
			["Shadow Barrier Rune","Def","Def","Any"],
			["Greedy Blow Rune","Atk","Buff","Any"],
			["Galloping Impact Rune","Atk","Buff","Any"],
			["Light Barrier Rune","Def","Buff","Any"],
			["Mechanical Regeneration Rune","Atk","Atk","Def"],
			["Ballistic Modification Rune","Atk","Atk","Buff"],
			["Elemental Armor Rune","Def","Def","Buff"],
			["Rapid Armor Rune","Def","Def","Buff"],
			["Energy Cannon Rune","Atk","Atk","Buff"],
			["Precision Maintenance Rune","Def","Def","Buff"],
			["Magnetic Field Rune","Atk","Def","Buff"],
			["Machine Re-start - Star Rune","Atk","Buff","Buff"],
			["Mech Pulse - Star Rune","Atk","Def","Buff"],
			["Photon Turbulence - Star Rune","Atk","Buff","Buff"],
			// ["Begetter Rune"],
			["Soul Devouring Bubble Rune","Atk","Atk","Any"],
			["Artillery Outfit Rune","Atk","Atk","Any"],
			["Cursed Potion Rune","Def","Def","Any"],
			["Nightmare Leave Rune","Atk","Atk","Any"],
			["Life Fetter Rune","Def","Def","Any"],
			["Hell Blaze Rune","Atk","Buff","Any"],
			["Shrill Howling Rune","Def","Buff","Any"],
			["Gene Recombination Rune","Def","Buff","Buff"],
			["Vine Purgatory Rune","Atk","Def","Buff"],
			["Berserk Flame Rune","Atk","Atk","Buff"],
			["Chaos Fusion Rune","Atk","Atk","Buff"],
			["Dark Thorns Rune","Atk","Def","Buff"],
			["Barbarous Thorn Rune","Atk","Def","Buff"],
			["Void Summon Rune","Atk","Def","Buff"],
			["Gene Modification - Star Rune","Atk","Atk","Buff"],
			["Merging Curse - Star Rune","Atk","Def","Buff"],
			["Thorny Vine Armor - Star Rune","Def","Def","Buff"],
			// ["Novice Guardian Rune"],
			["Soul Blast Rune","Atk","Buff","Any"],
			["Breath Solidification Rune","Atk","Def","Any"],
			["Sword Practice Rune","Atk","Atk","Any"],
			["Sharp Blade Pursuit Rune","Atk","Def","Any"],
			["Frost Storm Rune","Atk","Buff","Any"],
			["Rapid Crash Rune","Atk","Buff","Any"],
			["Taunt Curse Rune","Def","Def","Any"],
			["Charge Burst Rune","Atk","Atk","Buff"],
			["Flaming Thunder Rune","Atk","Atk","Buff"],
			["Ruthless Slash Rune","Atk","Atk","Buff"],
			["Magic Sword Rune","Atk","Atk","Buff"],
			["Returning Rune","Def","Def","Buff"],
			["Novice Blessing Rune","Def","Def","Buff"],
			["Soul Gathering Rune","Atk","Atk","Buff"],
			["Blizzard Thunderstorm - Star Rune","Atk","Atk","Buff"],
			["Night Glow Protection - Star Rune","Def","Def","Buff"],
			["Swift Storm - Star Rune","Atk","Def","Buff"],
			// ["Yamata Rune"],
			["Swamp Rune","Def","Def","Any"],
			["Multi Shadow Rune","Atk","Buff","Any"],
			["Honglyun's Sword Rune","Atk","Atk","Any"],
			["Misty Shroud Accelerating Rune","Atk","Def","Any"],
			["Whirlpool Combo Rune","Atk","Buff","Any"],
			["Ortho Wind Monster Rune","Atk","Atk","Any"],
			["Cross Chop Rune","Atk","Buff","Any"],
			["All Direction Shadow Rune","Atk","Def","Buff"],
			["Dim Moon’s Dream Rune","Atk","Def","Buff"],
			["Unrestrained Wind Rune","Atk","Atk","Buff"],
			["Thunder Wolf’s Protection Rune","Atk","Def","Buff"],
			["Flashing Shadow Rune","Def","Buff","Buff"],
			["True Meaning of Shadow Warrior Rune","Atk","Atk","Buff"],
			["All-round Liberation Rune","Atk","Atk","Buff"],
			["Cicada Night - Star Rune","Def","Def","Buff"],
			["One Single Thought - Star Rune","Atk","Atk","Buff"],
			["Windsoul Lightning - Star Rune","Atk","Buff","Buff"],
			// ["Spirit Whisperer Rune"],
			["Buggy Quick Strike Rune","Atk","Buff","Any"],
			["Leaf Dance Rune","Def","Buff","Any"],
			["Crazy Tree Rune","Atk","Atk","Any"],
			["Meteor Strike Rune","Atk","Buff","Any"],
			["Troublemaking Tarou Rune","Atk","Atk","Any"],
			["Savage Assault Rune","Atk","Buff","Any"],
			["Shrimp Frenzy Rune","Atk","Def","Any"],
			["Seafood Pond Rune","Atk","Def","Buff"],
			["Flying Frisbee Rune","Atk","Def","Buff"],
			["Secret Game Rune","Atk","Def","Buff"],
			["Meow Hunter Rune","Atk","Atk","Buff"],
			["Life Burst Rune","Atk","Def","Buff"],
			["Fresh Tuna Rune","Def","Def","Buff"],
			["Mentha Growth Rune","Def","Buff","Buff"],
			["Earth Revival - Star Rune","Atk","Atk","Buff"],
			["Sea Spirit Asylum - Star Rune","Def","Def","Buff"],
			["Life Bond - Star Rune","Atk","Atk","Buff"],
			["Moving Bombardment - Star Rune","Atk","Buff","Buff"],
			// ["Tyrant Rune"],
			["Warning Shot Awe Rune","Def","Def","Any"],
			["Vicious Stigma Rune","Atk","Buff","Any"],
			["Instinct Shot Rune","Atk","Buff","Any"],
			["Special Warfare Elite Rune","Def","Buff","Any"],
			["Firepower Suppression Rune","Atk","Buff","Any"],
			["Nano Armor Rune","Def","Buff","Any"],
			["Fragmentation Rune","Atk","Buff","Any"],
			["Flightfire Shooting Star Rune","Atk","Atk","Buff"],
			["Cheating Technique Rune","Atk","Atk","Buff"],
			["Massacre Bloom Rune","Atk","Atk","Buff"],
			["Potent Hormone Rune","Def","Def","Buff"],
			["Tactical Maneuver Rune","Atk","Buff","Buff"],
			["Stormtroop tactics Rune","Atk","Def","Buff"],
			["Fire on Full Power Rune","Atk","Atk","Buff"],
			["Death's Glare - Star Rune","Atk","Atk","Buff"],
			["Doomsday Fire Rain - Star Rune","Atk","Buff","Buff"],
			["Fatal Shot Order - Star Rune","Atk","Def","Buff"],
			// ["Soul Binder"],
			["Merciless Endless Suffering - Star Rune","Atk","Buff","Buff"],
			["Heart of Darkness - Star Rune","Atk","Def","Buff"],
            ["All-Purpose Es - Star Rune","Atk","Def","Buff"],
            ["Life Link Rune","Def","Def","Buff"],
			["Adversary of Magic Rune","Buff","Buff","Buff"],
			["Legerdemain","Atk","Def","Buff"],
			["Thought Corruption Rune","Atk","Atk","Buff"],
			["Whitewall Guardian Rune","Def","Def","Buff"],
            ["Intangible Rune","Atk","Def","Buff"],
			["Underworld Roamer Rune","Def","Def","Def"],
            // ["Taekwon"],
			["Galaxy Shatter - Star Rune","Atk","Buff","Buff"],
            ["Sun and Moon - Star Rune","Def","Def","Buff"],
            ["Laws of Heaven - Star Rune","Atk","Buff","Buff"],
            ["Stars all over the sky - Star Rune","Atk","Buff","Buff"],
            ["Mebula Change Rune","Atk","Def","Buff"],
            ["Sun Moon Guardian Rune","Def","Def","Buff"],
            ["Abhorrence Star Rune","Atk","Def","Buff"],
            ["Blody & Heart Rune","Atk","Atk","Buff"],
            ["Stellaris Rage Rune","Atk","Buff","Buff"],
            ["All for One Rune","Atk","Def","Buff"],
            ["Time Flashback Rune","Def","Def","Buff"],
			// ["Khalitzburg"],
			["Rose character Star Rune","Def","Buff","Any"],
            ["Wish Flowe Star Rune","Atk","Buff","Any"],
            ["Secret language Rose Star Rune","Buff","Buff","Any"],
            ["Memory of Petals Rune","Buff","Buff","Any"],
            ["Echo of Petals Rune","Def","Buff","Any"],
            ["Flower of Desperation Rune","Atk","Buff","Any"],
			// ["valk"],
			["Project Destruction Rune","Buff","Buff","Any"],
            ["Spirit of Fortitude - Star Rune","Def","Buff","Any"],
            ["Golden Flame - Star Rune","Atk","Buff","Any"],
            ["Epic Spirits Protection","Def","Buff","Any"],
            ["Goddess of War Rune","Buff","Buff","Any"],
            ["Aurora Feather - Star Rune","Atk","Buff","Any"],
			// ["Hella"],
			["Resounding Dream - Star Rune","Buff","Buff","Any"],
            ["Memory Extraction - Star Rune","Atk","Buff","Any"],
            ["Spectral Entanglement - Star Rune","Atk","Buff","Any"],
            ["Bloodline Awakening Rune","Def","Buff","Any"],
            ["Harvest of Death Rune","Buff","Buff","Any"],
            ["Vicious Canine Rune","Def","Buff","Any"],
			// ["thanatos"],
			["Final Showdown - Star Rune", "Atk", "Buff", "Any"],
			["Demon's Descent - Star Rune", "Atk", "Buff", "Any"],
			["Perpetual Nightmare - Star Rune", "Buff", "Buff", "Any"],
			["Iron Will Rune", "Def", "Buff", "Any"],
			["Dark Flashback Rune", "Def", "Buff", "Any"],
			["Burdened Mind Rune", "Buff", "Buff", "Any"],
			// ["Nidhogg"],
			["Holy Dragon's Duty - Star Rune", "Atk", "Buff", "Any"],
			["Reborn Tree - Star Rune", "Def", "Buff", "Any"],
			["Natural Protection - Star Rune", "Buff", "Buff", "Any"],
			["Spring of Life Rune", "Buff", "Buff", "Any"],
			["Primordial Dragon Rune", "Def", "Buff", "Any"],
			["Ragnarok Rune", "Atk", "Buff", "Any"],
			// ["Saitama"],
			["Power Emergence - Star Rune", "Atk", "Buff", "Any"],
			["Warm-Up - Star Rune", "Atk", "Buff", "Any"],
			["Limit Break - Star Rune", "Def", "Buff", "Any"],
			["Powerful Suppress Rune", "Buff", "Buff", "Any"],
			["Exercise Secrets Rune", "Buff", "Buff", "Any"],
			["Undefeated Position Rune", "Def", "Buff", "Any"],
			// ["Genos"],
			["Firepower Boost - Star Rune", "Atk", "Buff", "Any"],
			["Magnetic Field Control - Star Rune", "Def", "Buff", "Any"],
			["Thunder Dragon Impact - Star Rune", "Atk", "Buff", "Any"],
			["Propulsion Destroy Rune", "Buff", "Buff", "Any"],
			["Circle Endurance Rune", "Def", "Buff", "Any"],
			["Metal Ductility Rune", "Buff", "Buff", "Any"],
			// ["Hollgrehenn"],
			["Artisan's Smash - Star Rune", "Atk", "Buff", "Any"],
			["Artisan's Blessing - Star Rune", "Def", "Buff", "Any"],
			["Precise Forging - Star Rune", "Buff", "Buff", "Any"],
			["Total Concentration Rune", "Buff", "Buff", "Any"],
			["Undying Origin Rune", "Def", "Buff", "Any"],
			["Flame Penetration Rune", "Atk", "Buff", "Any"],
			// ["Jörmungandr"],
			["Lucky Shield - Star Rune", "Buff", "Buff", "Any"],
			["Universal Indulgence - Star Rune", "Def", "Buff", "Any"],
			["Endless Misfortune - Star Rune", "Buff", "Buff", "Any"],
			["Desert Sandstorm Rune", "Atk", "Buff", "Any"],
			["Boulder Penetration Rune", "Atk", "Buff", "Any"],
			["Time Barrier Rune", "Def", "Buff", "Any"],
			// ["Heinrich"],
			["Lay down one's life, star rune", "Atk", "Buff", "Any"],
			["A glimpse of the stars and runes" ,"Def", "Buff", "Any"],
			["Moon evening flower dynasty star rune", "Atk", "Buff", "Any"],
			["Rune of Breeze Whisper", "Def", "Buff", "Any"],
			["Oriental White Rune", "Buff", "Buff", "Any"],
			["Rune of Pure Blood", "Buff", "Buff", "Any"],
			// ["Ancient Artifact User"],
			["Vow of Shelter - Star Rune", "Def", "Buff", "Any"],
			["Magic Resonance - Star Rune", "Atk", "Buff", "Any"],
			["Emerald Domain - Star Rune", "Buff", "Buff", "Any"],
			["Elf's Anger Rune", "Atk", "Buff", "Any"],
			["Memory Erosion Rune", "Buff", "Buff", "Any"],
			["Promise of Fate Rune", "Def", "Buff", "Any"],
			// ["Thor"],
			["Echo of Storm - Star Rune", "Atk", "Buff", "Any"],
			["Memory of Wind - Star Rune", "Buff", "Buff", "Any"],
			["Eternal Soul - Star Rune", "Atk", "Buff", "Any"],
			["Oracle Descent Rune", "Def", "Buff", "Any"],
			["Dusk Finale Rune", "Def", "Buff", "Any"],
			["Deity's Blessing Rune", "Buff", "Buff", "Any"],
			// ["Fenrir"],
			["Frost Arrow - Star Rune", "Atk", "Buff", "Any"],
			["Ice Prison - Star Rune", "Def", "Buff", "Any"],
			["Impending Doom - Star Rune", "Buff", "Buff", "Any"],
			["Starluna Blade Rune", "Def", "Buff", "Any"],
			["Wolf Raid Rune", "Atk", "Buff", "Any"],
			["Moon Prison Rune", "Buff", "Buff", "Any"],
			// ["Sara Alin"],
			["Wish Blessing Star Rune", "Buff", "Buff", "Any"],
			["Fire starts a prairie fire star rune", "Atk", "Buff", "Any"],
			["Inflammation and fire never extinguish star rune", "Atk", "Buff", "Any"],
			["Rune of Separation between Mountains and Seas" ,"Def", "Buff", "Any"],
			["Rune of Butterfly Effect", "Buff", "Buff", "Any"],
			["Rune of Unity of Mind" ,"Def", "Buff" ,"Any"],
			// ["None"],
			["No Rune","Any","Any","Any"]
    ];
}


// Função para preencher as opções nos <select> dados seus IDs
function preencherOpcoes(selectIds) {
	selectIds.forEach(id => {
		const selectElement = document.getElementById(id);
		if (selectElement) {
			Runes.allRunes.forEach(rune => {
				const option = document.createElement('option');
				option.textContent = rune[0]; // Usando o nome da runa
				selectElement.appendChild(option);
			});
		}
	});
}

// IDs dos seletores que precisam ser preenchidos
const selectIds = ['list1', 'list2', 'list3', 'list4', 'list5', 'list6'];

// Preenche as opções quando a página carrega
window.onload = () => preencherOpcoes(selectIds);