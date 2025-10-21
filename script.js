const locationData = {
    "Andhra Pradesh": {
        "Anantapur": ["Agali", "Amarapuram", "Anantapur", "Atmakur", "Beluguppa", "Brahmasamudram", "Bukkapatnam", "Chennekothapalli", "Chilamathur", "Dharmavaram"],
        "Chittoor": ["Bangarupalem", "Chandragiri", "Chinnagottigallu", "Chittoor", "Gangadhara Nellore", "Gudipala", "Horsley Hills", "Irala", "Kalikiri", "Kuppam"],
        "East Godavari": ["Addateegala", "Alamuru", "Amalapuram", "Ambajipeta", "Anavaram", "Biccavolu", "Devipatnam", "Gangavaram", "Gollaprolu", "Jaggampeta"]
    },
    "Arunachal Pradesh": {
        "Anjaw": ["Anjaw", "Chaglagam", "Hawai", "Kibithoo", "Metengliang"],
        "Changlang": ["Bordumsa", "Changlang", "Diyun", "Jairampur", "Kharsang", "Miao", "Nampong", "Vijaynagar"],
        "East Kameng": ["Bameng", "Chayang Tajo", "Khenewa", "Pakke Kessang", "Pipu", "Richukrong", "Seijosa", "Seppa"]
    },
    "Assam": {
        "Baksa": ["Barama", "Baksa", "Goreswar", "Jalah", "Mushalpur", "Rangia", "Tamulpur"],
        "Barpeta": ["Barpeta", "Baghbar", "Chenga", "Howly", "Jania", "Kalgachia", "Mandia", "Sarbhog"],
        "Biswanath": ["Behali", "Biswanath Chariali", "Gohpur", "Jamuguri", "Pavakati"]
    },
    "Bihar": {
        "Araria": ["Araria", "Bhargama", "Forbesganj", "Jokihat", "Kursakanta", "Narpatganj", "Palasi", "Raniganj", "Sikti"],
        "Arwal": ["Arwal", "Karpi", "Kaler", "Sonbhadra Banshi"],
        "Aurangabad": ["Aurangabad", "Barun", "Daudnagar", "Deo", "Goh", "Haspura", "Kutumba", "Madanpur", "Nabinagar", "Obra", "Rafiganj"]
    },
    "Chhattisgarh": {
        "Balod": ["Balod", "Dondi", "Dondi Lohara", "Gurur"],
        "Baloda Bazar": ["Baloda Bazar", "Bhatapara", "Kasdol", "Palari", "Simga"],
        "Balrampur": ["Balrampur", "Kusmi", "Rajpur", "Samri", "Shankargarh", "Wadrafnagar"]
    },
    "Goa": {
        "North Goa": ["Aldona", "Anjuna", "Arambol", "Assagao", "Bardez", "Bicholim", "Calangute", "Candolim", "Mapusa", "Morjim", "Panaji", "Pernem", "Ponda", "Reis Magos", "Saligao", "Siolim", "Tivim"],
        "South Goa": ["Benaulim", "Betalbatim", "Canacona", "Cavelossim", "Colva", "Cuncolim", "Curtorim", "Loutolim", "Margao", "Mormugao", "Navelim", "Quepem", "Salcete", "Sanguem", "Varca", "Vasco da Gama"]
    },
    "Gujarat": {
        "Ahmedabad": ["Ahmedabad City", "Bavla", "Daskroi", "Detroj-Rampura", "Dhandhuka", "Dholera", "Dholka", "Mandal", "Ranpur", "Sanand", "Viramgam"],
        "Amreli": ["Amreli", "Babra", "Bagasara", "Dhari", "Jafrabad", "Khambha", "Kunkavav vadia", "Lathi", "Lilia", "Rajula", "Savarkundla"],
        "Anand": ["Anand", "Anklav", "Borsad", "Khambhat", "Petlad", "Sojitra", "Tarapur", "Umreth"]
    },
    "Haryana": {
        "Ambala": ["Ambala Cantt", "Ambala City", "Barara", "Mullana", "Naraingarh", "Shahzadpur"],
        "Bhiwani": ["Bawani Khera", "Bhiwani", "Dadri", "Loharu", "Siwani", "Tosham"],
        "Charkhi Dadri": ["Badhra", "Charkhi Dadri", "Jhajjar"]
    },
    "Himachal Pradesh": {
        "Bilaspur": ["Bilaspur", "Ghumarwin", "Jhanduta", "Sadar"],
        "Chamba": ["Bharmour", "Chamba", "Churah", "Dalhousie", "Pangi", "Tissa"],
        "Hamirpur": ["Barsar", "Bhoranj", "Hamirpur", "Nadaun", "Sujanpur Tira"]
    },
    "Jharkhand": {
        "Bokaro": ["Bermo", "Bokaro", "Chandankiyari", "Chas", "Gomia", "Jaridih"],
        "Chatra": ["Chatra", "Gidhaur", "Hunterganj", "Itkhori", "Lawalong", "Mayurbhanj", "Pathalgada", "Pratappur", "Simaria", "Tandwa"],
        "Deoghar": ["Deoghar", "Jasidih", "Karon", "Madhupur", "Mohanpur", "Palojori", "Sarwan", "Sonaraithari"]
    },
    "Karnataka": {
        "Bagalkot": ["Badami", "Bagalkot", "Bilagi", "Guledgudda", "Hunagund", "Jamkhandi", "Mudhol", "Rabkavi Banhatti"],
        "Ballari": ["Ballari", "Hagaribommanahalli", "Hospet", "Kudligi", "Sandur", "Siruguppa"],
        "Belagavi": ["Athni", "Bailhongal", "Belagavi", "Chikodi", "Gokak", "Hukkeri", "Khanapur", "Raibag", "Ramdurg", "Savadatti"]
    },
    "Kerala": {
        "Alappuzha": ["Alappuzha Municipality", "Ambalappuzha North", "Ambalappuzha South", "Arattupuzha", "Arookutty", "Bharanikavu", "Budhanoor", "Champakulam", "Chennam Pallippuram", "Chennithala", "Cheppad", "Cherthala Municipality", "Cherthala South", "Chingoli", "Devikulangara", "Edathua", "Harippad", "Kadakkarappally", "Kainakary", "Kandalloor", "Karuvatta", "Kavalam", "Kayamkulam Municipality", "Krishnapuram", "Kumarapuram", "Kumbakonam", "Mannancherry", "Mararikulam North", "Mararikulam South", "Muttar", "Nedumudy", "Neelamperoor", "Panavally", "Pandanad", "Pathiyoor", "Pulincunnu", "Puliyoor", "Punnapra North", "Punnapra South", "Purakad", "Ramankary", "Thaicattussery", "Thakazhy", "Thannermukkom", "Thuravoor", "Vallikunnam", "Vandanam", "Veeyapuram", "Venmoney", "Aryad", "Karthikappally", "Mavelikara Municipality", "Thamarakulam"],
        "Ernakulam": ["Aikaranad", "Alangad", "Aluva Municipality", "Amballoor", "Angamaly Municipality", "Arakuzha", "Assamannoor", "Avoly", "Ayavana", "Chellanam", "Cheranalloor", "Chittattukara", "Choornikkara", "Edakkattuvayal", "Edathala", "Elanji", "Eloor", "Kadungalloor", "Kalady", "Kalamassery Municipality", "Karukutty", "Keezhmad", "Kizhakkambalam", "Kochi Corporation", "Koothattukulam Municipality", "Kothamangalam Municipality", "Kottapady", "Kunnathunad", "Kuzhippilly", "Malayattoor", "Manjalloor", "Manjapra", "Mazhuvannoor", "Mudakkuzha", "Mulavukad", "Mulanthuruthy", "Nayarambalam", "Nedumbassery", "Njarakkal", "Okkal", "Pallarimangalam", "Pallipuram", "North Paravur Municipality", "Parakkadavu", "Payipra", "Piravom", "Pothanikkad", "Puthenvelikkara", "Rayamangalam", "Sreemoolanagaram", "Thirumarady", "Thiruvaniyoor", "Thrikkakara", "Thuravoor", "Vadakkekkara", "Vadavucode-Puthencruz", "Varapuzha", "Vazhakulam", "Vengola", "Vengoor", "Binanipuram", "Chendamangalam", "Chowara", "Ezhikkara", "Keerampara", "Kumbanad", "Moothakunnam", "Perumbavoor Municipality", "Ramamangalam", "Tripunithura Municipality"],
        "Idukki": ["Adimaly", "Alackode", "Arakkulam", "Azhutha", "Bisonvalley", "Chakkupallam", "Chappath", "Chithirapuram", "Devikulam", "Edamalakudy", "Elamdesam", "Elappara", "Erattayar", "Idukki", "Kamakshy", "Kanchiyar", "Kanjikkuzhi", "Karimannoor", "Karunapuram", "Kattappana Municipality", "Kodikkulam", "Kumily", "Kumaramangalam", "Manakkad", "Mankulam", "Marayoor", "Mariyapuram", "Munnar", "Muttom", "Nedumkandam", "Pallivasal", "Pampadumpara", "Peerumade", "Purappuzha", "Rajakumari", "Santhanpara", "Senapathy", "Thodupuzha Municipality", "Udumbanchola", "Upputhara", "Vandanmedu", "Vandiperiyar", "Vazhathope", "Velliyamattam", "Vellathooval", "Ayyappancoil", "Bhoothathankettu", "Konnathady", "Kovilmala", "Peermade", "Vattavada"],
        "Kannur": ["Alakode", "Anthoor", "Aralam", "Ayyankunnu", "Cheruthazham", "Chirakkal", "Chokli", "Dharmadam", "Edakkad", "Eranholi", "Iritty Municipality", "Iruvazhinji", "Kadannappalli Panappuzha", "Kadirur", "Kalliasseri", "Kannavam", "Kannur Corporation", "Kannapuram", "Kanichar", "Karivellur Peralam", "Katalayi", "Kelakam", "Kolachery", "Koodali", "Kottiyoor", "Kunhimangalam", "Madayi", "Maloor", "Mattannur Municipality", "Mattool", "Mokeri", "Muzhakkunnu", "Narath", "New Mahe", "Pallikkunnu", "Panoor", "Payyannur Municipality", "Peralasseri", "Peravoor", "Pilathara", "Puzhathi", "Sreekandapuram", "Taliparamba Municipality", "Thillenkeri", "Thottada", "Thuruthi", "Ulikkal", "Valapattanam", "Anjarakandy", "Cherukunnu", "Ezhome", "Kadachira", "Kanhangad", "Kottiyoor", "Mangattidam", "Pappinisseri", "Payam", "Ramanthali"],
        "Kasaragod": ["Badiadka", "Balal", "Bedadka", "Bellur", "Chemnad", "Cheruvathur", "Delampady", "Karadka", "Kasaragod Municipality", "Kumbdaje", "Kumbla", "Madhur", "Manjeshwar", "Mogral Puthur", "Muliyar", "Nileshwar Municipality", "Padne", "Pallikkara", "Panathady", "Pilicode", "Pullur Periya", "Trikaripur", "Udma", "Uppala", "Vellarikundu", "Vidyanagar"],
        "Kollam": ["Adichanalloor", "Alayamon", "Anchal", "Ayoor", "Bharanikavu", "Chavara", "Chithara", "Chirakkara", "Clappana", "East Kallada", "Edamulakkal", "Elamad", "Elampalloor", "Eravipuram", "Ezhukone", "Ittiva", "Kadakkal", "Kalluvathukkal", "Karunagappally", "Kareepra", "Kollam Corporation", "Kottamkara", "Kottarakkara Municipality", "Kulakkada", "Kulasekharapuram", "Kundara", "Kunnathur", "Mandrothuruthu", "Mayyanad", "Melila", "Mynagappally", "Neendakara", "Neduvathur", "Nilamel", "Oachira", "Ochira", "Panayam", "Panmana", "Paravur", "Pathanapuram", "Pavithreswaram", "Perayam", "Perinad", "Piravanthur", "Poothakkulam", "Pooyappally", "Poruvazhy", "Punalur Municipality", "Puthoor", "Sakthikulangara", "Sasthamcotta", "Sooranad", "Thalavoor", "Thenmala", "Thevalakkara", "Thodiyoor", "Thrikkadavoor", "Thrikkruva", "Thrikkovilvattom", "Ummannoor", "Velinalloor", "Veliyam", "Vettikavala", "Vilakkudy", "West Kallada", "Yeroor", "Kottiyam", "Mylom", "Nedumpana"],
        "Kottayam": ["Ayarkunnam", "Aymanam", "Bharananganam", "Changanassery Municipality", "Chempu", "Chirakkadavu", "Ettumanoor", "Kadanad", "Kadaplamattom", "Kaduthuruthy", "Kanjirappally", "Karoor", "Karukachal", "Kidangoor", "Kooroppada", "Kottayam Municipality", "Kumarakom", "Madappally", "Manarcaud", "Manjoor", "Marangattupilly", "Meenachil", "Meenadom", "Melukavu", "Moonnilav", "Mulakkulam", "Mundakayam", "Muttom", "Neendoor", "Njeezhoor", "Pala Municipality", "Pallom", "Pampady", "Panachikkad", "Parathodu", "Poonjar", "Puthuppally", "Ramapuram", "Teekoy", "Thalayazham", "Thalayolaparambu", "Thidanad", "Thiruvarppu", "TV Puram", "Udayanapuram", "Uzhavoor", "Vaikom Municipality", "Vakathanam", "Vechoor", "Veliyannoor", "Vellavoor", "Velloor", "Vijayapuram"],
        "Kozhikode": ["Azhiyoor", "Balussery", "Chelannur", "Chemancheri", "Chengottukavu", "Cheruvannur", "Eramala", "Feroke", "Kakkodi", "Kakkur", "Karanthur", "Kayanna", "Kizhakkoth", "Kodenchery", "Koduvally", "Kozhikode Corporation", "Kunnamangalam", "Kunnummal", "Madavoor", "Mavoor", "Melady", "Mukkom", "Nadapuram", "Nanmanda", "Narippatta", "Omassery", "Panthalayani", "Payyoli", "Perambra", "Purameri", "Quilandy Municipality", "Ramanattukara", "Sivapuram", "Thikkodi", "Thiruvambady", "Thurayur", "Thodannur", "Thuneri", "Ulliyeri", "Unnikulam", "Vadakara Municipality", "Valayam", "Vanimel", "Velom", "Vilangad"],
        "Malappuram": ["Abdurahiman Nagar", "Alamcode", "Anakkayam", "Areekode", "Athavanad", "Chaliyar", "Cheekkode", "Chelembra", "Chemmad", "Chokkad", "Edakkara", "Edappal", "Edarikkode", "Irimbiliyam", "Kalikavu", "Kaladi", "Karuvarakundu", "Kondotty Municipality", "Kottakkal Municipality", "Kuzhimanna", "Malappuram", "Mankada", "Marakkara", "Melattur", "Moorkkanad", "Moothedam", "Nilambur Municipality", "Oorakam", "Othukkungal", "Pandikkad", "Parappanangadi", "Perinthalmanna Municipality", "Perumpadappu", "Ponnani Municipality", "Pulikkal", "Purathur", "Puthanathani", "Tanur Municipality", "Tenhipalam", "Thirunavaya", "Thiruvali", "Tirurangadi", "Triprangode", "Ulloor", "Urangattiri", "Valanchery Municipality", "Vazhakkad", "Vazhayur", "Vengara", "Wandoor"],
        "Palakkad": ["Agali", "Akathethara", "Alathur", "Anakkara", "Ayilur", "Chalissery", "Chalavara", "Cherpulassery", "Chittur-Thathamangalam Municipality", "Collegal", "Elavanchery", "Eruthenpathy", "Kadambazhipuram", "Kannambra", "Kannadi", "Karakurissi", "Karimpuzha", "Kavassery", "Keralassery", "Kodumbu", "Kollengode", "Koottanad", "Koppam", "Kuzhalmannam", "Lakkidi-Perur", "Malampuzha", "Mannarkkad Municipality", "Mathur", "Melarcode", "Muthalamada", "Nalleppilly", "Nemmara", "Nelliayampathy", "Ottapalam Municipality", "Palakkad Municipality", "Pattambi Municipality", "Pudunagaram", "Pudussery", "Sholayur", "Sreekrishnapuram", "Tarur", "Thachanattukara", "Tharakkad", "Thirumittakode", "Thrithala", "Vadakkenchery", "Vandazhi", "Vilayur"],
        "Pathanamthitta": ["Adoor Municipality", "Anicadu", "Aranmula", "Aruvappulam", "Ayiroor", "Cherukolpuzha", "Cherukole", "Chittar", "Elanthoor", "Enadimangalam", "Eraviperoor", "Ezhamkulam", "Kadammanitta", "Kadapra", "Kalanjoor", "Kallooppara", "Kaviyoor", "Kodumon", "Koipram", "Konni", "Kozhencherry Municipality", "Kulanada", "Kumbanad", "Kuttoor", "Lahai", "Malayalapuzha", "Mallappally", "Mallappuzhassery", "Mannar", "Mezhuveli", "Naranganam", "Naranamoozhi", "Nedumpram", "Niranam", "Omalloor", "Pallickal", "Pandalam Municipality", "Pathanamthitta Municipality", "Peringara", "Perunadu", "Pramadom", "Pulikeezhu", "Puramattom", "Ranni", "Ranni-Angadi", "Ranni-Pazhavangadi", "Ranni-Perunad", "Seethathodu", "Thiruvalla Municipality", "Thottappuzhassery", "Thumpamon", "Vadasserikara", "Vallicode", "Vechoochira", "Ayroor", "Kozhencherry", "Pandalam"],
        "Thiruvananthapuram": ["Agasthyavanam", "Amboori", "Anchuthengu", "Andoorkonam", "Aruvikkara", "Attingal Municipality", "Azhoor", "Balaramapuram", "Bhoothapandi", "Chemmaruthy", "Cherunniyoor", "Chirayinkeezhu", "Dhanuvachapuram", "Edava", "Elakamon", "Kadakkavoor", "Kadinamkulam", "Kadaykkavoor", "Kallara", "Kalliyoor", "Kanjiramkulam", "Karakulam", "Karode", "Karumkulam", "Kattakada", "Kazhakuttom", "Kilimanoor", "Koliyakode", "Korani", "Kottukal", "Kottoor", "Kovalam", "Kulasekharam", "Kulathoor", "Kunnathukal", "Mangalapuram", "Manamboor", "Manickal", "Maranalloor", "Maruthoor", "Melthonnakkal", "Mudakkal", "Mylaudy", "Nagaroor", "Navaikulam", "Nedumangad Municipality", "Nellanad", "Neyyattinkara Municipality", "Ottasekharamangalam", "Ottoor", "Pallichal", "Palode", "Pangode", "Parassala", "Parasuvaikkal", "Perayam", "Peringammala", "Perumkadavila", "Perumpazhuthoor", "Poovachal", "Pullampara", "Pulimath", "Puthukurichi", "Sreekaryam", "Thennoor", "Thirupuram", "Thiruvananthapuram Corporation", "Tholicode", "Thumba", "Tiruvattar", "Uzhamalackal", "Vakkom", "Vamanapuram", "Varkala Municipality", "Vellanad", "Vellarada", "Vembayam", "Venganoor", "Vilavancode", "Vizhinjam"],
        "Thrissur": ["Adat", "Anthikkad", "Athirappilly", "Chalakudy Municipality", "Chavakkad Municipality", "Cherpu", "Choondal", "Desamangalam", "Eriyad", "Guruvayur Municipality", "Irinjalakuda Municipality", "Kadangodu", "Kadavallur", "Kadukutty", "Kaipamangalam", "Karalam", "Karukutty", "Kodakara", "Kodassery", "Kondazhy", "Koratty", "Kottapuram", "Kuzhur", "Mala Municipality", "Mathilakam", "Melur", "Mullassery", "Mundathikode", "Nadathara", "Nattika", "Nenmanikkara", "Ollukkara", "Padiyur", "Pananchery", "Paralam", "Pazhayannur", "Poyya", "Pudukad", "Puzhakkal", "Sreenarayanapuram", "Thalapilly", "Thekkumkara", "Thiruvambady", "Thrissur Corporation", "Vadanappally", "Valappad", "Vallachira", "Varandarappilly", "Vellangallur", "Wadakkanchery Municipality"],
        "Wayanad": ["Ambalavayal", "Edavaka", "Kalpetta Municipality", "Kaniyambetta", "Krishnagiri", "Mananthavady Municipality", "Meenangady", "Mullankolly", "Muttil", "Nenmeni", "Noolpuzha", "Padinharathara", "Panamaram", "Poothadi", "Pulpally", "Sultan Bathery Municipality", "Thavinjal", "Thirunelly", "Thondernad", "Thariyode", "Vellamunda", "Vengapally", "Vythiri"]
    },
    "Madhya Pradesh": {
        "Agar Malwa": ["Agar", "Barod", "Nalkheda", "Susner"],
        "Alirajpur": ["Alirajpur", "Bhabra", "Jobat", "Katthiwara", "Sondwa", "Udaygarh"],
        "Anuppur": ["Anuppur", "Jaithari", "Kotma", "Pushprajgarh"]
    },
    "Maharashtra": {
        "Ahmednagar": ["Ahmednagar", "Akole", "Jamkhed", "Karjat", "Kopargaon", "Nagar", "Nevasa", "Parner", "Pathardi", "Rahata", "Rahuri", "Sangamner", "Shevgaon", "Shrigonda", "Shrirampur"],
        "Akola": ["Akola", "Akot", "Balapur", "Barshitakli", "Murtijapur", "Patur", "Telhara"],
        "Amravati": ["Achalpur", "Amravati", "Anjangaon Surji", "Bhatkuli", "Chandur Bazar", "Chandur Railway", "Chikhaldara", "Churni", "Daryapur", "Dharni", "Dhamangaon Railway", "Melghat", "Morshi", "Nandgaon Khandeshwar", "Teosa", "Warud"]
    },
    "Manipur": {
        "Bishnupur": ["Bishnupur", "Kumbi", "Moirang", "Nambol", "Ningthoukhong", "Thanga"],
        "Chandel": ["Chakpikarong", "Chandel", "Tengnoupal"],
        "Churachandpur": ["Churachandpur", "Henglep", "Lamka", "Singngat", "Thanlon", "Tipaimukh"]
    },
    "Meghalaya": {
        "East Garo Hills": ["Dambo Rongjeng", "Rongjeng", "Samanda", "Songsak", "Williamnagar"],
        "East Jaintia Hills": ["Amlarem", "Khliehriat", "Saipung"],
        "East Khasi Hills": ["Khatarshnong Laitkroh", "Mawkyrwat", "Mawphlang", "Mawryngkneng", "Pynursla", "Shella Bholaganj", "Sohra", "Sonapur"]
    },
    "Mizoram": {
        "Aizawl": ["Aibawk", "Aizawl East", "Aizawl West", "Darlawn", "Reiek", "Thingsulthliah"],
        "Champhai": ["Champhai", "Khawzawl", "Ngopa"],
        "Kolasib": ["Bilkhawthlir", "Kolasib", "Thingdawl"]
    },
    "Nagaland": {
        "Dimapur": ["Chumukedima", "Dhansiripar", "Dimapur", "Niuland"],
        "Kiphire": ["Kiphire", "Longmatra", "Pungro", "Sitimi"],
        "Kohima": ["Chiephobozou", "Jakhama", "Kohima", "Ngwalwa", "Sechu Zubza", "Tseminyu"]
    },
    "Odisha": {
        "Angul": ["Angul", "Athamallik", "Banarpal", "Chhendipada", "Kaniha", "Kishorenagar", "Pallahara", "Talcher"],
        "Balangir": ["Agalpur", "Balangir", "Belpada", "Deogaon", "Khaprakhol", "Loisinga", "Muribahal", "Patnagarh", "Saintala", "Sindhekela", "Titlagarh", "Turekela"],
        "Balasore": ["Balasore", "Baliapal", "Basta", "Bhograi", "Jaleswar", "Khaira", "Nilagiri", "Oupada", "Remuna", "Simulia", "Soro"]
    },
    "Punjab": {
        "Amritsar": ["Ajnala", "Amritsar East", "Amritsar West", "Attari", "Bhikhiwind", "Budha Theh", "Chogawan", "Jandiala Guru", "Kathunangal", "Lopoke", "Majitha", "Rayya", "Tarn Taran"],
        "Barnala": ["Barnala", "Mehal Kalan", "Tapa"],
        "Bathinda": ["Bathinda", "Maur", "Nathana", "Phul", "Rampura Phul", "Sangat", "Talwandi Sabo"]
    },
    "Rajasthan": {
        "Ajmer": ["Ajmer", "Beawar", "Kekri", "Kishangarh", "Masuda", "Nasirabad", "Pisangan", "Pushkar", "Sarwar", "Silora"],
        "Alwar": ["Alwar", "Bansur", "Behror", "Kathumar", "Kishangarh Bas", "Kotkasim", "Lachhmangarh", "Malakhera", "Mundawar", "Neemrana", "Rajgarh", "Ramgarh", "Thanagazi", "Tijara"],
        "Banswara": ["Anandpuri", "Bagidora", "Banswara", "Garhi", "Ghatol", "Kushalgarh", "Partapur", "Sajjangarh"]
    },
    "Sikkim": {
        "East Sikkim": ["Arithang", "Gangtok", "Khamdong", "Pakyong", "Ranipool", "Rongli", "Rumtek"],
        "North Sikkim": ["Chungthang", "Dzongu", "Kabi", "Lachen", "Lachung", "Mangan"],
        "South Sikkim": ["Jorethang", "Namchi", "Ravangla", "Temi", "Yangang"]
    },
    "Tamil Nadu": {
        "Ariyalur": ["Andimadam", "Ariyalur", "Jayankondam", "Sendurai", "T. Palur", "Udayarpalayam"],
        "Chennai": ["Alandur", "Ambattur", "Avadi", "Chennai", "Madhavaram", "Pallavaram", "Poonamallee", "Sholinganallur", "Tambaram", "Tiruvottiyur"],
        "Coimbatore": ["Annur", "Coimbatore North", "Coimbatore South", "Kinathukadavu", "Madukkarai", "Mettupalayam", "Perur", "Pollachi", "Sulur", "Valparai"]
    },
    "Telangana": {
        "Adilabad": ["Adilabad", "Bela", "Boath", "Gadiguda", "Gudihathnoor", "Ichoda", "Indervelly", "Jainoor", "Kerameri", "Kubeer", "Lasoor", "Lokeshwaram", "Mamda", "Mudhole", "Narnoor", "Neradigonda", "Sarangapur", "Sirpur", "Tamsi", "Talamadugu", "Utnoor", "Vemanpalle", "Wankidi"],
        "Bhadradri Kothagudem": ["Aswapuram", "Bhadrachalam", "Burgampahad", "Chandrugonda", "Chintoor", "Dummugudem", "Gundala", "Julurpad", "Karakagudem", "Kothagudem", "Kukunoor", "Laxmidevipalli", "Manugur", "Mulakalapalli", "Palwancha", "Pinapaka", "Sathupalli", "Tekulapalli", "Tirumalayapalem", "Yellandu"],
        "Hyderabad": ["Ameerpet", "Asifnagar", "Bahadurpura", "Bandlaguda Jagir", "Banjara Hills", "Begumpet", "Charminar", "Golconda", "Goshamahal", "Hayathnagar", "Himayathnagar", "Jubilee Hills", "Karwan", "Khairatabad", "Langar Houz", "Malakpet", "Marredpally", "Musheerabad", "Nampally", "Old City", "Patancheru", "Quthbullapur", "Rajendranagar", "Ramachandrapuram", "Sanathnagar", "Secunderabad", "Serilingampally", "Shaikpet", "Uppal", "Yousufguda"]
    },
    "Tripura": {
        "Dhalai": ["Ambassa", "Chhamanu", "Dumburnagar", "Kamalpur", "Longtharai Valley", "Manu", "Salema"],
        "Gomati": ["Amarpur", "Bagafa", "Garjee", "Kakraban", "Karbook", "Ompi", "Rajnagar", "Silachari", "Srinagar"],
        "Khowai": ["Kalyanpur", "Khowai", "Lakshmipur", "Padmabil", "Teliamura"]
    },
    "Uttar Pradesh": {
        "Agra": ["Achhnera", "Agra", "Bah", "Barauli Ahir", "Etmadpur", "Fatehabad", "Fatehpur Sikri", "Jaitpur Kalan", "Khandauli", "Kheragarh", "Pinahat", "Shamsabad", "Songa"],
        "Aligarh": ["Atrauli", "Chandaus", "Dhanipur", "Gangiri", "Gonda", "Hasayan", "Iglas", "Jawan", "Khair", "Lodha", "Sasni", "Sikandra Rao", "Tappal"],
        "Allahabad": ["Allahabad", "Bahadurpur", "Bara", "Chaka", "Handia", "Jasra", "Karchhana", "Kaurihar", "Koraon", "Manda", "Meja", "Phulpur", "Pratappur", "Sadar", "Shankargarh", "Soraon", "Uruwan"]
    },
    "Uttarakhand": {
        "Almora": ["Almora", "Bhaisiachhana", "Bhikiyasain", "Chaukhutiya", "Dwarahat", "Hawalbagh", "Lamgarha", "Ranikhet", "Salt", "Someshwar", "Syalde", "Takula"],
        "Bageshwar": ["Bageshwar", "Garur", "Kanda"],
        "Chamoli": ["Chamoli Gopeshwar", "Dasholi", "Gairsain", "Ghat", "Joshimath", "Karnaprayag", "Narayanbagar", "Pokhari", "Tharali"]
    },
    "West Bengal": {
        "Alipurduar": ["Alipurduar I", "Alipurduar II", "Falakata", "Kalchini", "Kumargram", "Madarihat"],
        "Bankura": ["Bankura I", "Bankura II", "Barjora", "Bishnupur", "Chhatna", "Gangajalghati", "Hirbandh", "Indpur", "Joypur", "Khatra", "Mejhia", "Onda", "Patrasayer", "Raghunathpur", "Ranibandh", "Raipur", "Saltora", "Simlapal", "Sonamukhi", "Taldangra"],
        "Birbhum": ["Bolpur", "Dubrajpur", "Illambazar", "Khoyrasole", "Labhpur", "Mayureswar", "Murarai", "Nalhati", "Nanoor", "Rajnagar", "Rampurhat", "Sainthia", "Suri"]
    }
};

const stateSelect = document.getElementById('state-select');
const districtSelect = document.getElementById('district-select');
const panchayatSelect = document.getElementById('panchayat-select');
const viewMonitoringBtn = document.getElementById('view-monitoring-btn');

document.addEventListener('DOMContentLoaded', function() {
    initializeStates();
    setupEventListeners();
    setupSmoothScrolling();
});

function initializeStates() {
    const states = Object.keys(locationData);
    
    states.forEach(function(state) {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
}

function setupEventListeners() {
    stateSelect.addEventListener('change', handleStateChange);
    districtSelect.addEventListener('change', handleDistrictChange);
    panchayatSelect.addEventListener('change', handlePanchayatChange);
    viewMonitoringBtn.addEventListener('click', handleViewMonitoring);
}

function handleStateChange() {
    const selectedState = stateSelect.value;
    
    resetDropdown(districtSelect, 'Select District');
    resetDropdown(panchayatSelect, 'Select Panchayat');
    disableButton();
    
    if (selectedState) {
        districtSelect.disabled = false;
        const districts = Object.keys(locationData[selectedState]);
        
        districts.forEach(function(district) {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
        
        districtSelect.parentElement.style.animation = 'slideIn 0.5s ease';
    } else {
        districtSelect.disabled = true;
        panchayatSelect.disabled = true;
    }
}

function handleDistrictChange() {
    const selectedState = stateSelect.value;
    const selectedDistrict = districtSelect.value;
    
    resetDropdown(panchayatSelect, 'Select Panchayat');
    disableButton();
    
    if (selectedDistrict && selectedState) {
        panchayatSelect.disabled = false;
        const panchayats = locationData[selectedState][selectedDistrict];
        
        panchayats.forEach(function(panchayat) {
            const option = document.createElement('option');
            option.value = panchayat;
            option.textContent = panchayat;
            panchayatSelect.appendChild(option);
        });
        
        panchayatSelect.parentElement.style.animation = 'slideIn 0.5s ease';
    } else {
        panchayatSelect.disabled = true;
    }
}

function handlePanchayatChange() {
    const selectedPanchayat = panchayatSelect.value;
    
    if (selectedPanchayat) {
        enableButton();
    } else {
        disableButton();
    }
}

function handleViewMonitoring() {
    const selectedState = stateSelect.value;
    const selectedDistrict = districtSelect.value;
    const selectedPanchayat = panchayatSelect.value;
    
    if (selectedState && selectedDistrict && selectedPanchayat) {
        const locationInfo = {
            state: selectedState,
            district: selectedDistrict,
            panchayat: selectedPanchayat
        };
        
        localStorage.setItem('selectedLocation', JSON.stringify(locationInfo));
        
        viewMonitoringBtn.innerHTML = 'Loading...';
        viewMonitoringBtn.style.background = 'linear-gradient(135deg, #4a7c59 0%, #2d5016 100%)';
        
        setTimeout(function() {
            alert('Redirecting to monitoring dashboard for:\nState: ' + selectedState + '\nDistrict: ' + selectedDistrict + '\nPanchayat: ' + selectedPanchayat);
            
            viewMonitoringBtn.innerHTML = 'View Bin Monitoring';
            viewMonitoringBtn.style.background = 'linear-gradient(135deg, #2d5016 0%, #4a7c59 100%)';
        }, 1500);
    }
}

function resetDropdown(dropdown, placeholder) {
    dropdown.innerHTML = '<option value="">' + placeholder + '</option>';
}

function enableButton() {
    viewMonitoringBtn.disabled = false;
    viewMonitoringBtn.style.animation = 'fadeInUp 0.5s ease';
}

function disableButton() {
    viewMonitoringBtn.disabled = true;
}

function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.indexOf('#') === 0) {
                e.preventDefault();
                
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                this.style.color = '#2d5016';
                const self = this;
                setTimeout(function() {
                    self.style.color = '';
                }, 300);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        
        dropdown.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
    
    const mainLogo = document.querySelector('.main-logo');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (mainLogo) {
            mainLogo.style.transform = 'translateY(' + rate + 'px)';
        }
    });
});