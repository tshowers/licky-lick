import { Injectable } from '@angular/core';
import { Dropdown } from 'lick-data';
import { IdGeneratorService } from './id-generator.service';
import { FirebaseDataService, CONTACTS, PRODUCTS, EMAIL_ADDRESSES, INVOICES, ORDERS, PAYMENTS } from './firebase-data.service';



export const STATES = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

export const CREDIT_CARD_TYPES = ['Visa', 'American Express', 'BC Card', 'Master Card', 'Discover', 'Diners Club', 'Carta Si', 'Carte Bleue', 'Visa Electron', 'Japan Credit Bureau', 'Maestro'];

export const TEXT_POSITIONS = ['Left Top', 'Left', 'Left Bottom', 'Center Top', 'Center', 'Center Bottom', 'Right Top', 'Right', 'Right Bottom'];

export const SIMPLE_TEXT_POSITIONS = ['Left', 'Center', 'Right'];

export const PHONE_TYPES = ['Mobile', 'Personal', 'Office', 'Corporate', 'Other'];

export const FONTS = ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Trebuchet MS', 'Impact', 'Comic Sans MS'];

export const EFFECTS = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'bounceOut', 'bounceOutDown', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY', 'lightSpeedIn', 'lightSpeedOut', 'rotateIn',  'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight',  'rotateOut',  'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight',
'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'hinge', 'jackInTheBox', 'rollIn', 'rollOut'];

export const ADDRESS_TYPES = ['Home', 'Office', 'Corporate', 'Other'];

export const TASK_TYPES = ['Home Inspection', 'Follow Up', 'Arrange Showing', 'Pull Comparisons', 'Research', 'Set Appointment', 'Networking', 'Call', 'Email', 'Advertisement', 'Flyer', 'Deal', 'Create Post'];

export const EMAIL_TYPES = ['Personal', 'Office', 'Other', 'Corporate'];

export const SETTINGS_NAMES = ['On-boarding', 'Task Assistant', 'News', 'Calendar', 'Messaging', 'Opportunity', 'Project', 'e-Commerce', 'Contact', 'Docuttach', 'Alerts', 'Blog', 'Time Card', 'My LAN', 'Email', 'Travel', 'Topics', 'Goals'];

export const STATUS = ['Open', 'Not-Started', 'Canceled', 'Expired', 'Pending', 'Closed', 'Current', 'Active', 'In-Active', 'On-Hold', 'Planning', 'Complete', 'Requested', 'Approved', 'Rejected', 'Idea', 'In-Progress'];

export const GENDERS = ['Male', 'Female', 'Transgender', 'Polygender', 'Nonbinary', 'Intergender', 'Gender Queer', 'Gender Neutral',
  'Genderfluid', 'Femme', 'Demigender', 'Cigender', 'Butch', 'Bigender', 'Aporagender', 'Agender'];

export const PREFIXES = ['Adm', 'Atty', 'Brother', 'Capt', 'Chief', 'Cmdr', 'Col', 'Dean', 'Dr', 'Elder', 'Father',
  'Gen', 'Gov', 'Hon', 'Lt Col', 'Maj', 'MSgt', 'Mr', 'Mrs', 'Ms', 'Prince', 'Prof', 'Rabbi', 'Reverend', 'Sister'];

const CURRENT_STAGES = ['Initial', 'Completed', 'Preliminary', 'Prospecting', 'Evaluating', 'Negotiating', 'Closed Won', 'Closed Lost', 'Qualified Out', 'No Purchase'];

const OPPORTUNITY_TYPES = ['Call', 'Email', 'Work', 'Referral', 'News', 'Accounting', 'Web', 'Appointment', 'Marketing'];

const NEXT_STEPS = ['Email', 'Phone Call', 'Letter', 'Appointment', 'Other'];

export const SOURCES = ['Client Referral', 'News Article', 'Online Store', 'Call In', 'Cold Call'];

export const CATEGORIES = ['Automotive', 'Baby', 'Beauty', 'Book', 'Cell Phone', 'Clothing', 'Collectible', 'Electronic', 'Fine Art', 'Food',
  'Grocery', 'Handmade', 'Health', 'Historical', 'Home and Garden', 'Industrial', 'Jewelry', 'Luggage and Travel', 'Music', 'Musical Instrument',
  'Office', 'Outdoor', 'Personal Computer', 'Professional Service', 'Shoes Handbags Sunglasses', 'Software', 'Sports', 'Video', 'Watches', 'Wine'];

export const PROJECT_TYPES = ['Expansion', 'Improvement', 'Continuity', 'Research', 'Client', 'Strategic', 'Maintenance'];

export const FOP_TYPES = ['Cash', 'Check', 'Charge', 'Transfer', 'Paypal'];

export const EVENT_TYPES = ['Meeting', 'Work Activity', 'Conference', 'Seminar', 'Team Building', 'Lunch', 'Business Dinner', 'Happy Hour',
  'Press Conference', 'Product Launch', 'Presentation', 'Party', 'Wedding', 'Family', 'Board Meeting', 'Award Ceremony', 'Vacation', "Other"];

export const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const OFFER_TYPES = ['Coupon', 'Action'];

const SHIPPERS = ['FedEx', 'UPS', 'USPS'];

export const EMAIL_PROVIDERS = ['Outlook', 'GMail'];

export const RELATIONSHIPS = ['Spouse', 'Child', 'Parent', 'Other'];

export const PROJECT_SPONSORS = ['Project Manager', 'Customer', 'Project Executive', 'Operations Management', 'Functional Management', 'Sellers/Business Partners', 'Portfolio', 'Program', 'Program Management Office (PMO)'];


@Injectable()
export class DropdownService {

  public Countries = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Angola', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bangladesh', 'Barbados', 'Belgium', 'Belize', 'Bermuda', 'Bolivia', 'Botswana', 'Brazil', 'Bulgaria', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Chile', 'China', 'Colombia', 'Congo', 'Costa Rica', 'Cote d Ivoire', 'Cuba', 'Czech Republic', 'Denmark', 'Dominical Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Ethiopia', 'Falkland Islands', 'Fiji', 'Finland', 'France', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Guadeloupe', 'Guatemala', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kenya', 'Korea Republic of', 'Lebanon', 'Lithuania', 'Madagascar', 'Malaysia', 'Mali', 'Mexico', 'Morocco', 'Mozambique', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Nigeria', 'Norway', 'Pakistan', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Russia', 'Samoa', 'Senegal', 'Sierra Leone', 'Singapore', 'Slovakia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Tajikistan', 'Tanzania', 'Thailand', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Ukraine', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Viet Nam', 'Virgin Islands British', 'Virgin Islands U.S.', 'Yugoslavia', 'Zaire', 'Zimbabwe'];

  public Professions = ["Abbot / Abbess", "Acater", "Accipitary", "Accomptant", "Accoucheur / Accoucheuse", "Accountant", "Accoutre", "Accoutrement Maker", "Ackerman", "Actor / Actress", "Actuary", "Administrator", "Adventurer Archaeologist", "Aerospace Engineer", "Agent", "Agriculturist", "Air Traffic Controller", "Airman", "Alabasterer", "Alchemist", "Ale Conner", "Ale Draper", "Ale Taster", "Ale Tunner", "Alewife", "Alienist", "All Spice", "Almoner", "Almsman", "Alnager", "Amanuensis", "Amber Cutter", "Anaesthetist", "Anchor Smith", "Anchorite /Anchoress", "Anchorman", "Animal Trainer", "Animator", "Ankle Beater", "Annatto Maker", "Anthropologist", "Antigropelos Maker", "Antiquarian", "Anvil Smith", "Apiariana", "Apothecary", "Apprentice", "Apronman", "Aquavita Seller", "Arbalestier", "Arbiter", "Archaeologist", "Archbishop", "Archer", "Archiator", "Architect", "Archivist", "Argolet", "Arkwright", "Armiger", "Armorer", "Army Reservist", "Army Scout", "Arpenteur", "Art Deco Designer Or Architect", "Artificer", "Artisan", "Artist", "Ashman", "Assay Master", "Assayer", "Astrobiologist", "Astrologer", "Astronaut", "Astronomer", "Athletic Trainer", "Attendent", "Auger Maker", "Aulnager", "Aurifaber", "Aurifex", "Author", "Automobile Salesman", "Automotive Mechanic", "Avenator", "Aviation Pioneer", "Avowry", "Axle Tree Turner", "Babysitter", "Back us Boy", "Backmaker", "Backster", "Badger", "Badgy Fiddler", "Bagger", "Bagman", "Bagniokeeper", "Bailiff", "Bairman", "Baker", "Balancemaker", "Balancer", "Baler", "Ballad Monger", "Ballast Heaver", "Baller Up", "Band Filer", "Bandit", "Bandito", "Bandster", "Bang Beggar", "Bank Robber", "Bank Teller", "Banker", "Banks Man", "Banqueter", "Barber-Chirurgeon - See Barber", "Barber", "Bard", "Bargeman", "Barkeeper", "Barker", "Barkman", "Barm Brewer", "Barrel Filer", "Barrister", "Bartender", "Bartoner", "Baseball Player", "Basil Worker", "Basketmaker", "Basketman", "Bassoonist", "Bath Attendent", "Bather", "Bathing Machine Proprietor", "Batman", "Battledore Maker", "Bawd", "Baxter", "Bayweaver", "Beadle", "Beamster", "Bear-Ward", "Bearleader", "Beauty Queen", "Beauty Therapist", "Beaver", "Bedder", "Bedman", "Bedweaver", "Beekeeper", "Beer Seller", "Beerbrewer", "Beeskepmaker", "Beggar", "Beguine", "Bell Founder", "Bell Hanger", "Bell Ringer", "Bellfounder", "Bellhop", "Bellmaker", "Bellman", "Bellowfarmer", "Bellows Maker", "Belly Builder", "Bender", "Berner", "Besom Maker", "Bibliothecary", "Bid-Stand", "Biddy", "Bill Poster", "Billier", "Binder", "Biologist", "Bird Boy", "Bird Catcher", "Birds Nest Seller", "Bishop", "Black Borderer", "Blacking Maker", "Blacksmith-Armorer", "Blacksmith", "Bladesmith", "Bleacher", "Blemmere", "Block Maker", "Block Printer", "Blockcutter", "Bloodletter", "Bloomer", "Blower - Glass", "Blower - Smith", "Blower - Textile", "Bluestocking", "Bluffer", "Boarding Officer", "Boardwright", "Boatman", "Boatswain", "Boatwright", "Bobber - Fisherman", "Bobber - Metalworker", "Bocher", "Bodeys Maker", "Bodger", "Bodyguard", "Bodyservant", "Boiler Plater", "Boilermaker", "Bolter", "Bondager", "Bondman", "Bone Button Turner", "Bone Lace Maker", "Bone Picker", "Bonecarver", "Bonesetter", "Boniface", "Book Guilder", "Bookbinder", "Bookkeeper", "Bookprinter", "Bookseller", "Boonmaster", "Boot Closer", "Boot-Catcher", "Bootbinder", "Boothaler", "Boothman", "Bootlegger", "Borlera", "Botanist", "Botcher", "Bottelier", "Bottle Boy", "Bouncer", "Bounty Hunter", "Bowler", "Bowlman", "Bowman", "Bowyer", "Brabener", "Brachygrapher", "Brakesman", "Brasiator", "Brass Cutter", "Brass Finisher", "Brass Founder", "Brayer", "Brazier - Occupation", "Brazier", "Breach Maker", "Breechesmaker", "Brewer", "Brewster", "Brickburner", "Bricker", "Bricklayer", "Brickmaker", "Brickman", "Bridewell Keeper", "Bridgeman", "Brightsmith", "Broad Cooper", "Broadcloth Weaver", "Broderer", "Brogger", "Broiderer", "Bronzefounder", "Broom Dasher", "Broom Squire", "Broom-Dasher", "Browderer", "Brownsmith", "Brushbinder", "Buck Washer", "Buckle Maker", "Buckle Tongue Maker", "Bucklesmith", "Buffoon", "Builder", "Bullwhacker", "Bumboat Man", "Bunter", "Burglar", "Burgomaster", "Burler", "Burlesque Performer", "Burmaiden", "Buryeman", "Busheler", "Business", "Businessman", "Busker", "Buss Maker", "Butcher", "Butler", "Butner", "Button Burnisher", "Buttonmaker", "Cab Driver", "Cabbie", "Cabinetmaker", "Cad", "Caddy Butcher", "Cadger", "Cainer", "Calciner", "Calculator", "Calender", "Calligrapher", "Cambist", "Cambric Maker", "Cameraman", "Camerist", "Camp Cook", "Camp Counsellor", "Camp Follower", "Campaner", "Canadian Mountie", "Canaller", "Candler", "Candy Man", "Caner", "Cannoneer", "Cannonsmith", "Canon", "Canter", "Canting Caller", "Cantor", "Canvaser", "Canvasser", "Cape Merchant", "Caper", "Captain Of The Guard", "Captain", "Car Designer", "Carder", "Cardinal", "Cardiologist", "Cardmaker Wooler", "Cardmaker", "Carman", "Carnifex", "Carpenter-Joiner", "Carpenter", "Carriage Driver", "Cart Wheeler", "Carter", "Carter", "Cartier", "Cartographer", "Cartoonist", "Cartwright", "Cartwright", "Carver", "Cashier", "Castor", "Castrator", "Catchpole", "Cathar Perfect", "Cattle Baron", "Cattle Jobber", "Cattle Rustler", "Caulker", "Cavalry Officer", "Chief Business Development Officer", "Chief Design Officer", "Ceiler", "Cellarer", "Cellarman", "Cellist", "Chief Executive Officer", "Chief Financial Officer", "Chafferer", "Chainmaker", "Chaise Maker", "Chaloner", "Chamberlain", "Chambermaid", "Chambermaster", "Chancellor", "Chandler", "Chantry Priest", "Chanty Man", "Chapeler", "Chaplain", "Chapman", "Charcoal Burner", "Charcoalburner", "Charlatan", "Charwoman", "Chaser", "Chauffeur", "Cheese Monger", "Cheesemaker", "Chef", "Chemical Technologist", "Chemist", "Chicken Butcher", "Chief Of Police", "Chiffonier", "Chimney Sweep", "Chinese Launderer", "Chirurgeon", "Chronologist", "Church Usher", "Chief Information Officer", "Circuit Judge", "Circuit Preacher", "Circus Performer", "Civil Engineer", "Civil Servant", "Claim Jumper", "Clarinetist", "Clark", "Cleaner", "Clerk", "Clicker", "Clockmaker", "Clod-Hopper", "Clogger", "Clothier", "Clouter", "Clower", "Chief Marketing Officer", "Coach", "Coachmaker", "Coachman", "Coal Heaver", "Coalman", "Coaly", "Coast Guard", "Cobbler", "Cobbler", "Cockfeeder", "Codman", "Cogmen", "Coillor", "Coiner", "Coistsell", "Collar Maker", "College Co-Ed", "Collier", "Colporteur", "Columnist", "Combmaker", "Comedian", "Company Secretary", "Compasssmith", "Composer", "Computer Programmer", "Con Man", "Concierge", "Conductor - Music", "Coney Catcher", "Confectioner", "Confectionery", "Conman", "Connor", "Constable", "Construction Engineer", "Construction Worker", "Consul", "Consultant", "Contract Killer", "Contractor", "Cook", "Cooper", "Copeman", "Coper", "Coppersmith", "Copyist", "Corder", "Cordwainer", "Cork Cutter", "Corn Cutter", "Coroner", "Correctional Officer", "Corrector", "Corsetier", "Cosmetologist", "Cosmonaut", "Costermonger", "Costermonger", "Costume Designer", "Cotyler", "Couper", "Couranteer", "Courier", "Court Jester", "Court Reporter", "Court Wizard", "Courtesan", "Courtier", "Cowboy", "Cowgirl", "Cowherd", "Cowper", "Cowpoke", "Certified Public Accountant", "Cracker Boy", "Craftiman", "Craftsman", "Craftswoman", "Cramer", "Crate Man", "Creative Engineering", "Criminal", "Crimpet Maker", "Critic", "Crocker", "Crofter", "Crookmaker", "Cropper", "Crossbowman", "Crowner", "Cryptographer", "Cryptozoologist", "Crystallographer", "Chief Technology Officer", "Curate", "Curator", "Curer", "Currier", "Custodian", "Customs Officer", "Cutler", "Cutpurse", "Dairymaid", "Dairyman", "Damster", "Dancer", "Dapifer", "Database Administrator", "Day Laborer", "Dean", "Decoyman", "Deep Cover Agent", "Delver", "Delver", "Dentist", "Deputy - Law Enforcement", "Deputy - Parliamentary", "Dermatologist", "Designer", "Detective", "Determined Homesteader", "Diamantaire", "Dictator", "Dietician", "Diker", "Dilettante", "Diplomat", "Director", "Disc Jockey", "Dish Thrower", "Dish Turner", "Disher", "Dispatcher", "Distiller", "Ditcher", "Diver - Criminal", "Diver", "Dock Labourer", "Dock Master", "Docker", "Doctor Of Medicine", "Doctor", "Dog Breaker", "Dog Leech", "Dog Trainer", "Dog Walker", "Domainer", "Domesman", "Domestic Worker", "Dominatrix", "Door-Keeper", "Doorman", "Dowser", "Draftsman", "Drainer", "Dramatist", "Dramaturg", "Draper", "Drawer", "Drayman", "Dresser", "Dressmaker", "Drill Instructor", "Driver", "Drover", "Drummer", "Drycooper", "Drysalter", "Drywaller", "Dude Ranch Cowboy", "Duffer", "Dung Carter", "Dustman", "Dyer", "Earer", "Ecologist", "Economist", "Editor", "Educationalist", "Educator", "Eggler", "Egyptologist", "Electrical Engineer", "Electrician", "Elevator Mechanic", "Elymaker", "Embalmer", "Embosser", "Embroiderer", "Emperor", "Empresario", "Emptor", "Engine Driver", "Engineer", "Engraver", "Entomologist", "Entrepreneur", "Enumerator", "Environmental Scientist", "Eremite", "Ergonomist", "Escort", "Essence Peddler", "Estimator", "Etcher", "Ethnologist", "Ethologist", "Evangelist", "Exchequer", "Exciseman", "Executioner", "Executive", "Exobiologist", "Exotic Dancer", "Explorer", "Expressman", "Exterminator", "Extra", "Eyer", "Fabricshearer", "Factor", "Factory Worker", "Fagetter", "Falconer", "Famulus", "Fanner", "Farmer", "Farrier", "Fashion Designer", "Fashioner", "Father", "Fbi Agent", "Fbi Special Agent", "Feather-Beater", "Feather-Dresser", "Featherman", "Feller", "Fellmonger", "Felter", "Feltmaker", "Fence - Criminal", "Fence Viewer", "Fence", "Ferrer", "Ferryman", "Fewterer", "Fewtrer", "Fiddler", "Fighter Pilot", "Film Director", "Film Producer", "Financial Adviser", "Financial Manager", "Financier", "Fire Marshal", "Fire Safety Officer", "Firefighter", "First Mate", "Fish Fag", "Fisherman", "Fishmonger", "Fitter", "Flavorist", "Flax Dresser", "Flesher", "Fleshmonger", "Fletcher", "Flight Attendant", "Flight Instructor", "Floater", "Floor Manager", "Florist", "Fluffer", "Flusherman", "Flutist", "Flying Stationer", "Fogger", "Food Critic", "Fool", "Foot-Boy", "Foot-Maiden", "Footballer", "Footman", "Footpad", "Foreman", "Forensic Pathologist", "Forestaller", "Forester", "Forger", "Former Film Star", "Fortune Teller", "Forty Niner", "Fossetmaker", "Foundryman", "Fowler", "Frame Spinner", "Freibauer", "Fresco Painter", "Friar", "Fringemaker", "Fripperer", "Friseur", "Fruiterer", "Fruitestere", "Fruitier", "Fueller", "Fulker", "Fuller", "Furbisher", "Furner", "Furniture Maker", "Furrier", "Fustian Weaver", "G-Man", "Gaffer", "Gambler", "Game Designer", "Gamekeeper", "Gangrel", "Gangster", "Ganneker", "Gaoler", "Garcion", "Gardener", "Gastroenterologist", "Gater", "Gatward", "Gaunter", "Gelder", "Gemcutter", "Genealogist", "General", "Gentlemans Gentleman", "Geographer", "Geologist", "Geometer", "Geophysicist", "Gilder", "Gillie", "Ginour", "Girdler", "Glass Seller", "Glassblower", "Glasspainter", "Glazier", "Glover", "Goatherd", "Goldbeater", "Goldsmith", "Gong Farmer", "Goose Herd", "Goose Herder", "Government Agent", "Governor", "Grace Wife", "Graffer", "Grainer", "Grammarian", "Granger", "Graphic Artist", "Graphic Designer", "Gravedigger", "Graver", "Graverobber", "Grazier", "Greengrocer", "Greensmith", "Grenadier", "Grinder - Occupation", "Grinder", "Grocer", "Groom", "Guardian Ad Litem", "Guardsman", "Guide", "Guild Master", "Guitarist", "Gummer", "Gumshoe Detective", "Gun Moll", "Gunner", "Gunslinger", "Gunsmith", "Gunstocker", "Gynecologist", "Haberdasher", "Hacker", "Hackner", "Hackney Man", "Hairdresser", "Hairweaver", "Halberdier", "Hand Woman", "Handyman", "Harberdasher", "Harbourmaster", "Harlot", "Harness Maker", "Harper", "Harpist", "Hatcheler", "Hatmaker", "Hatter", "Hawker", "Hay Merchant", "Haymonger", "Hayward", "Headmaster", "Headmistress", "Hedger", "Heelmaker", "Henchman", "Herald", "Herbalist", "Herder", "Hermit", "Herpetologist", "Hetheleder", "Hewer", "Higger", "Highwayman", "Hind", "Hired Gun", "Historian", "Historiographer", "Hit Man", "Hobbler", "Hobo", "Hod", "Hodman", "Hoggard", "Homoeopath", "Hooper", "Horner", "Horner", "Horse Coper", "Horse Courser", "Horse Leech", "Horse Rustler", "Horse Trainer", "Horse-Capper", "Horseleech", "Hosier", "Hosteler", "Hostler", "Hotel Manager", "House Joiner", "Housewife", "Housewright", "Hoyman", "Huckster", "Hunter Trapper", "Hunter", "Huntsman", "Hurdle Maker", "Husbandman", "Iceman", "Icthyologist", "Illuminator", "Illusionist", "Illustrator", "Importer", "Indian Chief", "Industrial Engineer", "Industrialist", "Infirmarian", "Information Designer", "Information Technologist", "Inker", "Innholder", "Innkeeper", "Instructor", "Intelligencer", "Intendant", "Interfactor", "Interior Designer", "Interpreter", "Interrogator", "Intrepid Merchant", "Inventor", "Investigator", "Investment Banker", "Investment Broker", "Iron Smith", "Ironmaster", "Ironmonger", "Ironworker", "Ivorist", "Ivory Worker", "Jack", "Jacksmith", "Jagger", "Jailer", "Jakes-Farmer", "Janitor", "Jazz Musician", "Jester", "Jeweler", "Jewler", "Jobber", "Jobmaster", "Jockey", "Joiner", "Joiner", "Jongleur", "Journalist", "Journeyman", "Jouster", "Judge", "Juggler", "Jurist", "Karate Master", "Kedger", "Keelman", "Kempster", "Kiddier", "Kinesiologist", "King", "Knacker", "Knapper", "Kneller", "Knifeman", "Knifesmith", "Knight", "Knockknobbler", "Knoller", "Laborer", "Lacemaker", "Laceman", "Lacewoman", "Ladys Maid", "Lady", "Lagger", "Lampwright", "Lancier", "Land Waiter", "Landed Gentry", "Landlady", "Landlord", "Lands Jobber", "Landsman", "Lanternmaker", "Lapidary", "Laster", "Latoner", "Lattener", "Launderer", "Laundress", "Lavendar", "Law Enforcement Agent", "Law Enforcement", "Lawyer", "Leadworker", "Leather Dresser", "Leatherer", "Lecturer", "Leech", "Legerdemainist", "Leightonward", "Lensgrinder", "Level Designer", "Librarian", "Librettist", "Lifeguard", "Lighter Man", "Lighterman", "Lighthouse Keeper", "Lighting Technician", "Limner", "Lineman", "Linen-Armorer", "Linen-Draper", "Linener", "Linenspinner", "Liner", "Linguist", "Link Boy", "Link Man", "Linkerman", "Lister", "Litster", "Loan Officer", "Lobbyist", "Loblolly Boy", "Lock Keeper", "Locksmith", "Lodesman", "Longshoreman", "Loresman", "Lorimer", "Lumberjack", "Lungs - Alchemy", "Lutemaker", "Lutenist", "Luthier", "Lyricist", "Machinist", "Maderer", "Magistrate", "Magnate", "Maid", "Maidservant", "Mail Carrier", "Mailer", "Mailmaker", "Mailman", "Make-Up Artist", "Malemaker", "Malemaker", "Malender", "Malster", "Management Consultant", "Management", "Manager", "Manciple", "Mangle Keeper", "Manicurist", "Mantuamaker", "Manufacturer", "Mapmaker", "Mapper", "Marine Biologist", "Marine", "Mariner", "Market Gardener", "Marler", "Marleywoman", "Marshal", "Martial Artist", "Mason", "Massage Therapist", "Masseur", "Masseuse", "Master Builder", "Master Mariner", "Master Of Ceremony", "Master Of Hounds", "Master Of The Revels", "Master Of The Rolls", "Master", "Matador", "Matchet Forger", "Mathematician", "Meader", "Mealman", "Meat Butcher", "Mechanic", "Mechanician", "Mediator", "Medic", "Medical Biller", "Medical Transcriptionist", "Medicine Man", "Medicine Peddler", "Medicine", "Meistersinger", "Melder", "Menage-Man", "Mercator", "Mercenary", "Mercer", "Merchant Taylor", "Merchant", "Mesmerist", "Messenger", "Metalman", "Meterer", "Metropolitan Bishop", "Midshipman", "Midwife", "Military Officer", "Militia", "Milkmaid", "Milkman", "Miller", "Milleress", "Milliner", "Millwright", "Miner", "Miniaturist", "Minister", "Minnesinger", "Minstrel", "Minter", "Mintmaster", "Mirrorer", "Missionary", "Mixer", "Model", "Modeller", "Molecatcher", "Money-Schrivener", "Moneychanger", "Moneyer", "Moneylender", "Monk Or Nun", "Mortgage Broker", "Moulder", "Mountaineer", "Mudlark", "Muffin Man", "Muleskinner", "Muleteer", "Multurer", "Mummer", "Muralist", "Music Teacher", "Musician", "Musiker", "Musketeer", "Mustarder", "Nailmaker", "Nakerer", "Nanny", "Napier", "Natural Philosopher", "Navigator", "Navigator", "Necessary Woman", "Necker", "Nedeller", "N̩gociant", "Negotiator", "Netmaker", "Netter", "Newscaster", "Night Auditor", "Night Magistrate", "Night Soilman", "Nightwalker", "Nimgimmer", "Nob-Thatcher", "Noble", "Nobleman", "Notary", "Novelist", "Numerologist", "Numismatist", "Nun ��_ Effectively A Female Monk", "Nurse", "Nursemaid", "Oboist", "Obstetrician", "Occupational Therapist", "Occupier", "Odontologist", "Oil Merchant", "Oilmaker", "Oilman", "Old-Clothes Dealer", "Olitor", "Oncologist", "Operator", "Ophthalmologist", "Optician", "Optometrist", "Oracle", "Orderly", "Ordinary Keeper", "Ordinary Seaman", "Orfever", "Organizer", "Ornithologist", "Ostiary", "Ostler", "Ostreger", "Otorhinolaryngologist", "Out-Crier", "Outlaw", "Owler", "Oynter", "Oyster Raker", "Oysterer", "Packer", "Packman", "Painter", "Paintress", "Paleontologist", "Paling Man", "Palmer", "Pan Smith", "Panter", "Paperer - Needlemaking", "Papermaker", "Paralegal", "Paramedic", "Parapsychologist", "Parchmenter", "Pardoner", "Parish Priest", "Park Ranger", "Parker", "Parole Officer", "Passage Keeper", "Pasteler", "Pastor", "Pastrycook", "Patent Attorney", "Patent Examiner", "Pathologist", "Pattenmaker", "Paver", "Pavior", "Pavyler", "Pawnbroker", "Peager", "Peasant", "Pedaile", "Peddler", "Pediatrician", "Pedologist - Soil", "Pelterer", "Perchemear", "Percussionist", "Peregrinator", "Perfumer", "Perfumer", "Periwig Maker", "Personal Trainer", "Peruker", "Perukier", "Pessoner", "Peterman", "Pettifogger", "Petty Chapman", "Pew Opener", "Pewterer", "Pharmacist", "Pharmaopoeist", "Philanthropist", "Philologist", "Philosopher", "Philosophical Instrument Maker", "Photographer", "Photojournalist", "Physical Therapist", "Physician Assistant", "Physician", "Physicist", "Physiognomist", "Physiotherapist", "Pianist", "Piano Tuner", "Picaroon", "Pickpocket", "Pie Seller", "Piece Broker", "Pigmaker", "Pigman", "Pikelet Maker", "Pikeman", "Pikeman", "Piker", "Pilgrim", "Pill Box Lidder", "Piller", "Pilot - Aviation", "Pilot - Shipping", "Pilot", "Pinder", "Piner", "Pinkertons Agent", "Pinmaker", "Pinner Up", "Pinner", "Pioneer - Siege", "Pioneer", "Piper", "Pirate", "Pissprophet", "Pitman", "Plain Worker", "Plaiter", "Planker", "Plasterer", "Plattner", "Player", "Playwright", "Plough Jogger", "Plowman", "Plowright", "Plumassier / Plumer", "Plumber", "Plumbum Man", "Plumer", "Poacher", "Podiatrist", "Poet", "Pointer", "Pointer", "Poleman", "Poleturner", "Police Detective", "Police Inspector", "Police Officer", "Police", "Politician", "Ponderator", "Pony Express Rider", "Pope", "Pornstar", "Portable Soup Maker", "Porter", "Post Rider", "Postillion", "Pot Boy", "Pot Mender", "Potato Badger", "Potboy", "Potter Carrier", "Potter", "Pouch Maker", "Poulter", "Poynter", "Presenter", "President", "Press Officer", "Prestidigitator", "Pricker", "Priest", "Primate", "Prince", "Princess", "Principal", "Printer", "Printer", "Private Detective", "Privycleaner", "Probation Officer", "Proctologist", "Procurator", "Professional Athelete", "Professional Dominant", "Professor", "Programmer", "Project Manager", "Proofreader", "Prophet", "Prospector", "Prostitute", "Psychiatrist", "Psychodramatist", "Psychologist", "Public Relations Officer", "Public Speaker", "Publican", "Publisher", "Pugger", "Pulleymaker", "Pumbum", "Pumpmaker", "Purse Maker", "Purser", "Pursuivant", "Quack", "Quarrier", "Quarryman", "Quartermaster", "Quiller", "Quilter", "Quister", "Radio Journalist", "Radio Personality", "Radiographer", "Radiologist", "Rag And Bone Man", "Rag Cutter", "Rag Gatherer", "Rag Man", "Ragpicker", "Railroad Baron", "Railroad Brakeman", "Railroad Conductor", "Railroad Engineer", "Railroad Laborer", "Railroad Stoker", "Raker", "Ranch Hand", "Rancher", "Rat Catcher", "Ratoner", "Rattlewatch", "Real Estate Broker", "Real Estate Developer", "Real Estate Investor", "Reaper", "Receptionist", "Record Producer", "Rectifier", "Redsmith", "Reedmaker", "Reeve", "Referee", "Refuse Collector", "Registrar", "Religion", "Reporter", "Research Assistant", "Researcher", "Respiratory Therapist", "Restaurateur", "Retail Clerk", "Retailer", "Revenuer", "Rigger", "Ripper", "Riverboat Pilot", "Riverman", "Riveter", "Rodeo Rider", "Rodman", "Roofer", "Ropemaker", "Roper", "Rover", "Rugmaker", "Rugman", "Rugweaver", "Runner", "Rustler", "Sacristan", "Saddle Tree Maker", "Saddler", "Sage", "Sailmaker", "Sailor", "Saloon Girl", "Saloon Owner", "Saloonist", "Saltboiler", "Salter", "Sandesman", "Sanitation Worker", "Sapper", "Sartor", "Saucier", "Sawbones", "Sawyer", "Saxophonist", "Say Weaver", "Sayer", "Scabbard Maker", "Scavelman", "School Superintendent", "Schoolmarm", "Schoolmaster", "Schrimpschonger", "Scientist", "Scout", "Screenwriter", "Scribe", "Scribe", "Scrimer", "Scripture Reader", "Scrivener", "Scrutineer", "Scullery Maid", "Scullion", "Sculptor", "Scythesmith", "Sea Captain", "Sealer", "Seamstress", "Searcher", "Second Mate", "Secret Service Agent", "Secretary General", "Secretary", "Security Guard", "Seedsman", "Semi Lorer", "Sempstress", "Senator", "Seneschal", "Seo", "Serf", "Sergeant-At-Arms", "Sergeant", "Servant", "Sewster", "Sex Worker", "Sexologist", "Sexton", "Shanty-Man", "Sharecropper", "Shearer", "Sheargrinder", "Shearman", "Sheath Maker", "Sheepman", "Sheepshearer", "Shepherd", "Shepster", "Sheriff Officer", "Sheriff", "Shill", "Shingler", "Ship Master", "Ship Provisioner", "Ships Captain", "Shipchandler", "Shipwright", "Shoe-Finder", "Shoe-Wiper", "Shoemaker", "Shoesmith", "Shop Assistant", "Shop Keeper", "Shoresman", "Shrager", "Shrieve", "Shrimper", "Siege Engineer", "Siever", "Silk Throwster", "Silk-Carder", "Silk-Dresser", "Silk-Dyer", "Silk-Maker", "Silk-Mercer", "Silk-Snatcher", "Silkmaid", "Silversmith", "Singer", "Skald", "Skepper", "Skinker", "Skinner", "Slater", "Sleeper", "Sleuth", "Slop Seller", "Smelter", "Smith", "Smuggler", "Snake Oil Salesman", "Snobber", "Snobscat", "Snow Warden", "Snuffer Maker", "Soapboiler", "Social Bandit", "Social Worker", "Socialite", "Software Engineer", "Soil Scientist", "Sojourner Clothier", "Soldier", "Solicitor", "Sommelier", "Sonographer", "Sortor", "Sound Engineer", "Souter", "Spallier", "Speakeasy Employee", "Spearman", "Special Agent", "Spectaclesmaker", "Speech Therapist", "Sperviter", "Spice Merchant", "Spicer", "Spinner", "Spinster", "Splitter", "Spooner", "Sportsman", "Spurrer", "Spurrier", "Spy", "Squire", "Stablehand", "Stabler", "Stainer", "Stampman", "Stapler", "Starship Captain", "Stationary Tender", "Stationer", "Statistician", "Stay Maker", "Steersman", "Stenographer", "Step Boy", "Stevedore", "Steward", "Stewsman", "Stillroom", "Stitcher", "Stockinger", "Stoker", "Stone Cutter", "Stone Picker", "Stone Worker", "Stonecarver", "Stonecutter", "Stonemason", "Stoner", "Stonewarden", "Storyteller", "Straw Joiner", "Streaker - Mortuary", "Street Artist", "Street Cleaner", "Street Musician", "Street Sweeper", "Street Vendor", "Strikebreaker", "Stringer", "Stripper", "Structural Engineer", "Student", "Stuffgownsman", "Stunt Double", "Stunt Performer", "Sucksmith", "Summoner - Law", "Supervisor", "Surgeon", "Surveyor", "Sutler", "Swain", "Swamper", "Sweep", "Swimmer", "Swineherd", "Switchboard Operator", "Sword Cutler", "Swordsmith", "System Administrator", "Systems Analyst", "Tabler", "Tailor", "Tallow Chandler", "Tallowchandler", "Tally-Clerk", "Tallyman", "Tankard Bearer", "Tanner", "Taper Weaver", "Tapester", "Tapestrymaker", "Tapicer", "Tapiser", "Tapper", "Tapster", "Tasseler", "Tavern Keeper", "Taverner", "Tawer", "Tax Collector", "Tax Lawyer", "Taxicab Driver", "Taxidermist", "Taxonomist", "Tea Lady", "Teacher", "Teamster", "Technical Writer", "Technician", "Technologist", "Telegraph Operator", "Telegraphist", "Telephone Operator", "Tennis Player", "Tenter", "Test Developer", "Test Pilot", "Thacker", "Thatcher", "Theatre Director", "Theologian", "Theologist", "Therapist", "Thimbler", "Thimblerigger", "Thonger", "Threadmaker", "Thresher", "Throwster", "Tickney Man", "Tide Gauger", "Tide Waiter", "Tiemaker", "Tile Maker", "Tile-Burner", "Tile-Theeker", "Tiler", "Tiller", "Tillerman", "Tillman", "Tiltmaker", "Time Police", "Timekeeper", "Times Ironer", "Tinctor", "Tinker", "Tinner", "Tinsmith", "Tinter", "Tipper", "Tippler", "Tipstaff", "Tirewoman", "Tobacco Spinner", "Toll Keeper", "Toller", "Tollgate Keeper", "Tonsor", "Tool And Die Maker", "Tool Helver", "Toolmaker", "Topman", "Topsman", "Town Crier", "Town Marshal", "Trademark Attorney", "Trader", "Tradesman", "Trainer", "Tramper", "Trampler", "Tranqueter", "Transit Planner", "Translator", "Tranter", "Trapper", "Traunter", "Treasurer", "Treen Maker", "Treenail Maker", "Trenchermaker", "Trencherman", "Trobairitz", "Troubadour", "Truchman", "Truck Driver", "Trugger", "Tubber", "Tubedrawer", "Tumbler", "Tunist", "Turner", "Turnkey", "Tutor", "Tyler", "Typefounder", "Typist", "Ufologist", "Undercover Agent", "Undertaker", "Underwriter", "Unemployed", "Unguentary", "Upholder", "Upholsterer", "Upright Worker", "Urchin", "Urologist", "Us Marshal", "Userer", "Usher", "Vaginarius", "Valet", "Vaquero", "Vatman", "Verge Maker", "Verger", "Verrier", "Verser", "Veterinarian", "Vibraphonist", "Vicar", "Victualler", "Video Editor", "Video Game Developer", "Viking", "Vintager", "Vintner", "Violinist", "Violist", "Virginal Player", "Vulcan - Profession", "Waferer", "Waferer", "Wagoner", "Wainwright", "Waiter", "Waitman", "Waitress", "Wakeman", "Walker", "Waller", "Wantcatcher", "Warden", "Warder", "Warper - Boating", "Warper - Weaving", "Warrener", "Washman", "Watch Finisher", "Watchmaker", "Watchman", "Water Baliff", "Water Carrier", "Water Gilder", "Water Leader", "Waterman", "Waterseller", "Wattle Hurdle Maker", "Wattler", "Waxchandler", "Way Man", "Way-Maker", "Weaponsmith", "Weatherman", "Weatherspy", "Weaver", "Web Designer", "Web Developer", "Webber", "Webster", "Wedding Planner", "Weeder", "Weeper", "Weigher", "Weirkeeper", "Welder", "Wellmaster", "Wellsinker", "Wellwright", "Western Union Man", "Wet Glover", "Wet Nurse", "Wetter", "Whacker", "Whaler", "Wharfinger", "Wheeler", "Wheelwright", "Wherryman", "Whipcord Maker", "Whipper In", "Whit Cooper", "White Limer", "Whitear", "Whitener", "Whitening Roll Maker", "Whiter Tawer", "Whitesmith", "Whitewing", "Whittawer", "Wigmaker", "Wild West Outlaw", "Willow Plaiter", "Winder", "Windster", "Wine Seller", "Winemaker", "Wiredrawer", "Witch", "Wizard", "Wood Cutter", "Wood Reeve", "Wood Seller", "Woodbreaker", "Woodcarver", "Woodcutter", "Woodmonger", "Woodranger", "Woodturner", "Woodward", "Wool Driver", "Wool Grower", "Wool Sorter", "Wool Stapler", "Wool Winder", "Woolcomber", "Woolman", "Woolsted Man", "Working Cowboy", "Worsted Manufacturer", "Wrangler", "Wright", "Writer", "Xenobiologist", "Xylophonist", "Yardman", "Yatman", "Yearman", "Yeoman", "Yodeler", "Zookeeper", "Zoologist"];


  private _contacts: Dropdown[] = [];
  private _products: Dropdown[] = [];
  private _invoices: Dropdown[] = [];
  private _orders: Dropdown[] = [];
  private _payments: Dropdown[] = [];
  private _emailAddresses: Dropdown[] = [];
  public names = [];
  public fullNames = [];
  public emailAddresses = [];

  constructor(public db: FirebaseDataService) {
    this.initializeDropdowns();
  }

  private initializeDropdowns() {
    // this.loadContacts();
    // this.loadProducts();
    // this.loadInvoices();
    // this.loadOrders();
    // this.loadPayments();
    // this.loadEmailAddresses();
  }

  // private loadEmailAddresses() {
  //
  //   this.db.getDataListing(EMAIL_ADDRESSES + this.authService.getDataPrefix()).valueChanges().subscribe({
  //     next: (emailAddresses) => {
  //       this.emailAddresses.length = 0;
  //       this._emailAddresses = emailAddresses.map((emailAddress) => {
  //         this.emailAddresses.push(emailAddress.emailAddress);
  //         return new Dropdown(emailAddress.id, emailAddress.emailAddress)
  //       })
  //     },
  //     error: (error) => console.error(error),
  //   });
  // }
  //
  // private loadInvoices() {
  //   this.db.getDataListing(INVOICES + this.authService.getDataPrefix()).valueChanges().subscribe({
  //     next: (invoices) => {
  //       this._invoices = invoices.map((invoice) => {return new Dropdown(invoice.id, invoice.id)})
  //     },
  //     error: (error) => console.error(error),
  //   });
  // }
  //
  // private loadOrders() {
  //   this.db.getDataListing(ORDERS + this.authService.getDataPrefix()).valueChanges().subscribe({
  //     next: (orders) => {
  //       this._orders = orders.map((order) => {return new Dropdown(order.id, order.id)})
  //     },
  //     error: (error) => console.error(error),
  //   });
  // }
  //
  // private loadPayments() {
  //   this.db.getDataListing(PAYMENTS + this.authService.getDataPrefix()).valueChanges().subscribe({
  //     next: (payments) => {
  //       this._payments = payments.map((payment) => {return new Dropdown(payment.id, payment.id)})
  //     },
  //     error: (error) => console.error(error),
  //   });
  // }
  //
  // private loadProducts() {
  //   this.db.getDataListing(PRODUCTS + this.authService.getDataPrefix()).valueChanges().subscribe({
  //     next: (products) => {
  //       this._products = products.map((product) => {return new Dropdown(product.id, product.name)})
  //     },
  //     error: (error) => console.error(error),
  //   });
  // }
  //
  // private loadContacts() {
  //   return this.db.getDataListing(CONTACTS + this.authService.getDataPrefix()).valueChanges().subscribe({
  //     next: (contacts) => {
  //       this.names.length = 0;
  //       contacts.map((contact) => {
  //         this.names.push(contact.firstName);
  //         this.names.push(contact.lastName);
  //         this.fullNames.push(contact.firstName + " " + contact.lastName);
  //         return new Dropdown(contact.id, contact.firstName + " " + contact.lastName)
  //       })
  //     },
  //     error: (error) => console.error(error),
  //   });
  // }

  getSettings(): Dropdown[] {
    return SETTINGS_NAMES.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getRelationships(): Dropdown[] {
    return RELATIONSHIPS.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getEmailAddresses(): Dropdown[] {
    return this._emailAddresses.sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getProjectSponsors(): Dropdown[] {
    return PROJECT_SPONSORS.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  // getInvoices(): Dropdown[] {
  //   if (!this._invoices)
  //     this.loadInvoices();
  //   return this._invoices.sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  // }
  //
  // getOrders(): Dropdown[] {
  //   if (!this._orders)
  //     this.loadOrders();
  //   return this._orders.sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  // }

  getPayments(): Dropdown[] {
    return this._payments.sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getProducts(): Dropdown[] {
    return this._products.sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getContacts(): Dropdown[] {
    return this._contacts.sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getShippers(): Dropdown[] {
    return SHIPPERS.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getEmailProviders(): Dropdown[] {
    return EMAIL_PROVIDERS.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getOfferTypes(): Dropdown[] {
    return OFFER_TYPES.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getCreditCardTypes(): Dropdown[] {
    return CREDIT_CARD_TYPES.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getDaysOfWeek(): Dropdown[] {
    return DAYS_OF_WEEK.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getEventTypes(): Dropdown[] {
    return EVENT_TYPES.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getFOPTypes(): Dropdown[] {
    return FOP_TYPES.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getEffects(): Dropdown[] {
    return EFFECTS.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getFonts(): Dropdown[] {
    return FONTS.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getTextPositions(): Dropdown[] {
    return TEXT_POSITIONS.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getSimpleTextPositions(): Dropdown[] {
    return SIMPLE_TEXT_POSITIONS.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getProjectTypes(): Dropdown[] {
    return PROJECT_TYPES.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getCategories(): Dropdown[] {
    return CATEGORIES.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getSources(): Dropdown[] {
    return SOURCES.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getOpportunityTypes(): Dropdown[] {
    return OPPORTUNITY_TYPES.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getCurrentStages(): Dropdown[] {
    return CURRENT_STAGES.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getNextSteps(): Dropdown[] {
    return NEXT_STEPS.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getPrefixes(): Dropdown[] {
    return PREFIXES.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getStatus(): Dropdown[] {
    return STATUS.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getGenders(): Dropdown[] {
    return GENDERS.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getStates(): Dropdown[] {
    return STATES.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getPhoneTypes(): Dropdown[] {
    return PHONE_TYPES.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getTaskTypes(): Dropdown[] {
    return TASK_TYPES.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getAddressTypes(): Dropdown[] {
    return ADDRESS_TYPES.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getEmailTypes(): Dropdown[] {
    return EMAIL_TYPES.map((item) => {return new Dropdown(IdGeneratorService.generateUUID(), item)}).sort((a, b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1 });
  }

  getStateByID(id) {
    return (STATES) ? STATES.find(a => a == id) : '';
  }

}
