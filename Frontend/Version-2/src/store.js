import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const serverUrl = 'http://localhost:3000'
const serverUrl = 'http://play-trinity.com/theo/bplantool/api'

export const store = new Vuex.Store({
	state: {

			bpProgress: {
				basicInformationIsComplete: false,
				internalAnalysisIsComplete: false,
				externalAnalysisIsComplete: false,
				strategyIsComplete: false,
				financialPlanIsComplete: false
			},

			// Odigies.
			newDesc: [
				{"Id": 0, "Description": ""}, 
				{"Id": 1, "Description":"Στην παρούσα καρτέλα με όνομα «Βασικά στοιχεία» θα αναγράφονται τα κύρια στοιχεία της εταιρίας, όπως η Επωνυμία της Εταιρίας, η Διεύθυνσή της,  τα Τηλέφωνα Επικοινωνίας καθώς και άλλα πεδία όπως e-mail, website κ.λ.π. Επιπλέον δίνεται η δυνατότητα στον χρήστη να εισάγει και μια Σύνοψη της Εταιρίας σε μορφή κειμένου."},
				{"Id": 2, "Description":"Εσωτερικό περιβάλλον είναι οι παράγοντες της επιχείρησης (οργανισμού) οι οποίοι την επηρεάζουν και βρίσκονται σε άμεση συσχέτιση μεταξύ τους (αλληλεπίδραση). Αυτοί είναι: οι ανθρώπινοι πόροι (εργατικό και στελεχιακό δυναμικό), οι φυσικοί (εγκαταστάσεις, πάγιος εξοπλισμός, αποθέματα), οι τεχνολογικοί, οι οικονομικοί (δάνεια, πηγές κεφαλαίων, μετοχικό κεφάλαιο κ.α) \n\n	Η  καρτέλα με όνομα «Εσωτερική Ανάλυση» θα αποτελείται από συνθήκες, οντότητες, γεγονότα μέσα στην επιχείρηση. Αυτές επηρεάζουν τις δραστηριότητες, τις επιλογές και ιδιαίτερα την συμπεριφορά των εργαζομένων που είναι ο στόχος του εσωτερικού περιβάλλοντος. Επίσης  οι ηγετικές μορφές και η οργάνωση της παίζουν σημαντικό ρόλο στην επιτυχία της. 				Σημαντικές κατηγορίες της Εσωτερικής Ανάλυσης που καλείται να συμπληρώσει ο χρήστης είναι οι Μέτοχοι της επιχείρησης, η περιγραφή της επιχείρησης, τα προϊόντα ή οι υπηρεσίες που θα προσφέρονται καθώς και η στρατηγική επιλογή της τοποθεσίας της εταιρίας."},			
				{"Id": 3, "Description":"Εξωτερικό περιβάλλον μιας επιχείρησης είναι οι παράγοντες οι οποίοι δρουν έξω από μια επιχείρηση, την επηρεάζουν και αλληλοεπιδρούν μεταξύ τους. Η διάκριση του εξωτερικού περιβάλλοντος σε γενικό και ειδικό είναι άκρως σημαντική αφού απλοποιεί τον τρόπο μελέτης και πρόβλεψης των συνθηκών λειτουργίας της επιχείρησης. Οι παράγοντες (στοιχεία) του εξωτερικού γενικού περιβάλλοντος είναι: οικονομικοί (η διάρθρωση της οικονομίας μιας χώρας, οι τομείς παραγωγής, οι παραγωγικοί πόροι, τα επίπεδα ανάπτυξης κ.α ) πολιτικοί (πολιτικό καθεστώς, κρατικός παρεμβατισμός, πολιτική και οικονομική ελευθερία, γραφειοκρατία κ.α) θεσμικοί (νομοθεσία, θεσμικό πλαίσιο, κανονισμοί) κοινωνικοί ( διάρθρωση της κοινωνίας, πολιτισμός , ιστορία, ήθη, έθιμα, κινητικότητα πολιτών κ.α ) και τεχνολογικοί (επίπεδο εφαρμογής προόδου και αποδοχής της τεχνολογίας και αποτελεσματικός συνδυασμός πόρων, γνώσεων, εμπειριών κ.α) Οι παράγοντες (στοιχεία) του εξωτερικού ειδικού ή λειτουργικού περιβάλλοντος μιας επιχείρησης είναι: οι πελάτες, οι προμηθευτές, οι ανταγωνιστές, οι κρατικοί φορείς, οι εργατικές ενώσεις, τα επιμελητήρια  Τα βασικά χαρακτηριστικά αυτής της κατηγορίας περιβάλλοντος είναι η διαφορετικότητά του μεταξύ των επιχειρήσεων και η άμεση επίδρασή του στη λήψη των αποφάσεων. Οι κατηγορίες που καλείται να συμπληρώσει ο χρήστης είναι οι παρακάτω: Ανάλυση καταναλωτή, Ανάλυση ανταγωνισμού, Ανάλυση αγοράς, Ανάλυση περιβάλλοντος, Ανάλυση SWOT"},
				{"Id": 4, "Description":"Η έννοια της στρατηγικής των επιχειρήσεων, ορίζεται ως ο καθορισμός των μακροχρόνιων στόχων της επιχείρησης και την αποστολή ή το όραμα της επιχείρησης, Επιπλέον δίνεται έμφαση στον καθορισμό των δραστηριοτήτων της επιχείρησης σύμφωνα με το εσωτερικό και το εξωτερικό περιβάλλον της. Επιχειρώντας τη σύνθεση των διάφορων ορισμών καταλήγουμε σε κάποια βασικά χαρακτηριστικά που περιλαμβάνονται στον ορισμό των Johnson και Scholes. Η στρατηγική λαμβάνει υπόψη της τους πόρους (υλικούς και άϋλους) της επιχείρησης και γενικότερα  το εσωτερικό περιβάλλον της, τις δυνάμεις και τις αδυναμίες της. Επιπλέον, η στρατηγική λαμβάνει υπόψη της το εξωτερικό περιβάλλον της επιχείρησης, με τις απειλές και τις ευκαιρίες που αυτό παρέχει· συγκεκριμένα πρόκειται για το μακρο-περιβάλλον (πολιτικό, οικονομικό, κοινωνικό, τεχνολογικό) και το μικρο-περιβάλλον (άμεσοι και έμμεσοι ανταγωνιστές)  	Με βάση τα παραπάνω, η στρατηγική καθορίζει τις μακροπρόθεσμες δραστηριότητες της επιχείρησης, το εύρος και την κατεύθυνση των δραστηριοτήτων  	Ακόμη, η στρατηγική στοχεύει, μεταξύ άλλων, στην απόκτηση και διατήρηση ανταγωνιστικών πλεονεκτημάτων για την επιχείρηση  Ουσιαστικά η στρατηγική αποτελεί το σημείο αναφοράς που καθοδηγεί την επιχείρηση στην υλοποίηση των μακροχρόνιων στόχων της. Η αποδοχή μιας στρατηγικής έχει και άλλες θετικές διαστάσεις για την επιχείρηση, καθώς συντονίζει τις διαδικασίες λήψης αποφάσεων, τις δράσεις και τις θέσεις της επιχείρησης στο εσωτερικό της και απέναντι στους ανταγωνιστές της.     Οι κατηγορίες που καλείται να συμπληρώσει ο χρήστης είναι οι παρακάτω: Στρατηγική προϊόντων, και Πλάνο Marketing όπου το στελεχώνουν οι εξής υποενότητες: Συμπεριφορά καταναλωτή, Προϊόν/Υπηρεσία, Διανομή, Προώθηση, Πωλήσεις και Διοικητικό πλάνο."},
				{"Id": 5, "Description": "Σε αυτή την ενότητα παρουσιάζεται η οικονοµική κατάσταση της επιχείρησης. Τα στοιχεία προς παρουσίαση είναι των προηγούµενων ετών, αλλά περιλαµβάνονται και προβλέψεις (π.χ. επιτόκια, αλλαγές στην αγορά, φορολογία, έξοδα κλπ.) για τα επόµενα χρόνια. Αυτό σηµαίνει ότι πρέπει να γίνουν πάλι κάποιες υποθέσεις µε ρεαλιστικό χαρακτήρα. \n\n • Ισολογισµός: καταδεικνύει το πόσο υγιής είναι η επιχείρηση περιγράφοντας το ενεργητικό, το παθητικό και τα ίδια τα κεφάλαια. Το σχέδιο πρέπει να περιέχει έναν ισολογισµό του τρέχοντος έτους, έναν ισολογισµό του προηγούµενου έτους και έναν ισολογισµό ενδεικτικό για τα επόµενα έτη. \n\n • Ανάλυση χρηµατορροών: αναλύει τη ρευστότητα µιας επιχείρησης. Μέσω αυτής, ο επιχειρηµατίας µπορεί να αποκτήσει πλήρη εικόνα των χρηµάτων που µπαίνουν και βγαίνουν από το ταµείο. Αυτό το εργαλείο είναι πολύ χρήσιµο για την επιχείρηση, γιατί βοηθά στη σωστή ρύθµιση των υποχρεώσεων και των απαιτήσεών της. \n\n • Κατάσταση αποτελεσµάτων χρήσης: παρουσιάζει τα έσοδα, τα έξοδα, τα κέρδη και τις ζηµίες της επιχείρησης. Καλό είναι να περιλαµβάνονται στο σχέδιο τωρινές, παλιές, αλλά και µελλοντικές καταστάσεις."}	
			], 
			
			// 1.Basic Information
			companyName: "fashion4u",
			address: "valaoritou 4",
			telephone: "2310666666",
			email: "fashion4u@gmail.com",
			website: "fashion4u.gr",
			businessNature: "fashion",
			capital: 25000,
			foundationYear: 1985,
			strains: [ "Elon Musk", "Aria Stark" ],
			synopsis: "Η ουσία της χρήσης του Lorem Ipsum είναι ότι έχει λίγο-πολύ μία ομαλή κατανομή γραμμάτων, αντίθετα με το να βάλει κανείς κείμενο όπως 'Εδώ θα μπει κείμενο, εδώ θα μπει κείμενο', κάνοντάς το να φαίνεται σαν κανονικό κείμενο.",
			
			// 2.Internal Analysis
			shareholders: ["John Smith", "Jack Sparrow"],
			description: "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. ",
			products: [
				{
					id: 1,
					type: 'product',
					name: "Πουκάμισο",
					details: "2012 fall-winter collection"
				},
				{
					id: 2,
					type: 'product',
					name: "Παντελόνι"	,
					details:"Είναι ανοικτό μπλε υφασμάτινο καλοκαιρινό Lee μάρκας."
				},
				{
					id: 3,
					type: 'product',
					name: "Παπούτσια"	,
					details:"Αθλητικά Nike παπούτσια."
				}
			],
			location: "Το καθιερωμένο κομμάτι του Lorem Ipsum που χρησιμοποιείται από τον 15ο αιώνα αναπαράγεται παρακάτω για αυτούς που ενδιαφέρονται.",
			  
			//3.External Analysis
			consumerAnalysis: "Πολλά λογισμικά πακέτα ηλεκτρονικής σελιδοποίησης και επεξεργαστές ιστότοπων πλέον χρησιμοποιούν το Lorem Ipsum σαν προκαθορισμένο δείγμα κειμένου, και η αναζήτησ για τις λέξεις 'lorem ipsum' στο διαδίκτυο θα αποκαλύψει πολλά web site που βρίσκονται στο στάδιο της δημιουργίας. ",
			competitionAnalysis: "Έγινε δημοφιλές τη δεκαετία του '60 με την έκδοση των δειγμάτων της Letraset όπου περιελάμβαναν αποσπάσματα του Lorem Ipsum, και πιο πρόσφατα με το λογισμικό ηλεκτρονικής σελιδοποίησης όπως το Aldus PageMaker που περιείχαν εκδοχές του Lorem Ipsum.",
			marketAnalysis: {
				synthesis: "",
				type: "",
				competitors: "",
				perithoriaEisodou: ""
			},
			enviromentAnalysis:  "Αντίθετα με αυτό που θεωρεί η πλειοψηφία, το Lorem Ipsum δεν είναι απλά ένα τυχαίο κείμενο. Οι ρίζες του βρίσκονται σε ένα κείμενο Λατινικής λογοτεχνίας του 45 π.Χ., φτάνοντας την ηλικία του πάνω από 2000 έτη.",
			swot: {
				strengths: ["nice clothes","low prices","strong marketing"],
				weaknesses: ["lower quality of clothes"],
				opportunities: ["opportunity1","opportunity"],
				threats: ["thrt1"]
			},
			
			// 4.Strategy
			productStrategy: "Υπάρχουν πολλές εκδοχές των αποσπασμάτων του Lorem Ipsum διαθέσιμες, αλλά η πλειοψηφία τους έχει δεχθεί κάποιας μορφής αλλοιώσεις, με ενσωματωμένους αστεεισμούς, ή τυχαίες λέξεις που δεν γίνονται καν πιστευτές. ",
			consumerBehavior: "Ο Richard McClintock, καθηγητής Λατινικών στο κολλέγιο Hampden-Dydney στην Βιρτζίνια, αναζήτησε μία από τις πιο σπάνιες Λατινικές λέξεις, την consectetur, από ένα απόσπασμα του Lorem Ipsum, και ανάμεσα σε όλα τα έργα της κλασσικής λογοτεχνίας, ανακάλυψε την αναμφισβήτητη πηγή του. ",
			productMarketing: "Οι ενότητες 1.10.32 και 1.10.33 από το 'de Finibus Bonorum et Malorum' από τον Σισερό επίσης αναπαράγονται στην ακριβή αυθεντική τους μορφή, συνοδευόμενες από Αγγλικές εκδοχές από την μετάφραση του 1914 από τον H. Rackham.",
			distribution: "Υπάρχουν πολλές εκδοχές των αποσπασμάτων του Lorem Ipsum διαθέσιμες, αλλά η πλειοψηφία τους έχει δεχθεί κάποιας μορφής αλλοιώσεις, με ενσωματωμένους αστεεισμούς, ή τυχαίες λέξεις που δεν γίνονται καν πιστευτές. Εάν πρόκειται να χρησιμοποιήσετε ένα κομμάτι του Lorem Ipsum, πρέπει να είστε βέβαιοι πως δεν βρίσκεται κάτι προσβλητικό κρυμμένο μέσα στο κείμενο.",
			promotion: " και η αναζήτησ για τις λέξεις 'lorem ipsum' στο διαδίκτυο θα αποκαλύψει πολλά web site που βρίσκονται στο στάδιο της δημιουργίας. Διάφορες εκδοχές έχουν προκύψει με το πέρασμα των χρόνων, άλλες φορές κατά λάθος, άλλες φορές σκόπιμα (με σκοπό το χιούμορ και άλλα συναφή",
			sales: {
				value: 0,
				salesTimelap: "",
				quantity: 0,
				totalValue: 0 
			},
			administrativePlan: "",

			// 5.Financial Plan
			expenses: [ 
				{ "year": 2018, "yearExpenses": 32000, },
				{ "year": 2019, "yearExpenses": 37000, },
				{ "year": 2020, "yearExpenses": 52000, },
			],
			useResults: {
				productSales: 0,
				mixedProfit: 0,
				standardExpenses: 16000,
				variableExpenses: 2000,
				totalExpenses: 0,
				totalProfit: 0
			}
	},

	actions: {
	// 	// Identity 2.1,  Categories based on FinalJsons.js
	// 	getIdentities: function ({ commit }) {
	// 		axios.get(serverUrl + "/identity")
	// 			.then(function (response)
	// 			{
	// 				commit('GET_IDENTITIES', response.data)
	// 			})
	// 			.catch(function (err) {
	// 				console.log(err)
	// 			})
	// 	},
	// 	createIdentity: function ({ commit }, payload) {
	// 		axios.post(serverUrl + "/identity", payload)
	// 		.then(function (response)
	// 		{
	// 			console.log("payload of create: ", payload)
	// 			commit('CREATE_IDENTITY', payload)
	// 			})
	// 			.catch(function (err) {
	// 				console.log(err)
	// 			})
	// 	},	
	// 	deleteIdentity: function ({ commit }, payload) {
	// 		axios.delete(serverUrl + "/identity/" + payload)
	// 		.then(function (response)
	// 		{
	// 			commit('DELETE_IDENTITY', payload)
	// 		})
	// 		.catch(function (err) {
	// 			console.log(err)
	// 		})
	// 	},

	},

	mutations:{	
		TOGGLE_BASIC_INFORMATION_PROGRESS: (state, payload) => {
			state.bpProgress.basicInformationIsComplete = payload
		},		
		TOGGLE_INTERNAL_ANALYSIS_PROGRESS: (state, payload) => {
			state.bpProgress.internalAnalysisIsComplete = payload
		},		
		TOGGLE_EXTERNAL_ANALYSIS_PROGRESS: (state, payload) => {
			state.bpProgress.externalAnalysisIsComplete = payload
		},		
		TOGGLE_STRATEGY_PROGRESS: (state, payload) => {
			state.bpProgress.strategyIsComplete = payload
		},		
		TOGGLE_FINANCIAL_PLAN_PROGRESS: (state, payload) => {
			state.bpProgress.financialPlanIsComplete = payload
		}
	},

	getters:{
		companyName: state => {
			return state.companyName
		},
		address: state => {
			return state.address
		},
		telephone: state => {
			return state.telephone
		},
		email: state => {
			return state.email
		},
		website: state => {
			return state.website
		},
		businessNature: state => {
			return state.businessNature
		},
		capital: state => {
			return state.capital
		},
		foundationYear: state => {
			return state.foundationYear
		},
		strains: state => {
			return state.strains
		},
		synopsis: state => {
			return state.synopsis
		},
		// aaaaaaa: state => {
		// 	return state.aaaaaa
		// },
		// aaaaaaa: state => {
		// 	return state.aaaaaa
		// },
		// aaaaaaa: state => {
		// 	return state.aaaaaa
		// },
		// aaaaaaa: state => {
		// 	return state.aaaaaa
		// },
		// aaaaaaa: state => {
		// 	return state.aaaaaa
		// },
		// aaaaaaa: state => {
		// 	return state.aaaaaa
		// },
		// aaaaaaa: state => {
		// 	return state.aaaaaa
		// },
		// aaaaaaa: state => {
		// 	return state.aaaaaa
		// },
	}
})