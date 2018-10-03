const grupos =
	[
		{
			"id":0,
			"nome": "Pequenas Refeições (Desjejum Lanches e Ceia)",
			"descricao": "Grupo dos Cereais",
			"calorias": 150,
			"itens":
			[
				{	
					"id":0,
					"alimento": "Aveia em Flocos",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":1,
					"alimento": "Biscoito de Aveia e Mel / Maça e Canela / Leite",
					"porcao":
						[
							{
								"quantidade": 5,
								"unidade":[16]
							}
						]
				},
				{	
					"id":2,
					"alimento": "Biscoito Champanhe",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[16]
							}
						]
				},
				{	
					"id":3,
					"alimento": "Biscoito Cream Cracker",
					"porcao":
						[
							{
								"quantidade": 5,
								"unidade":[16]
							}
						]
				},
				{	
					"id":4,
					"alimento": "Biscoito de Polvilho",
					"porcao":
						[
							{
								"quantidade": 5,
								"unidade":[16]
							}
						]
				},
				{	
					"id":5,
					"alimento": "Biscoito Maria / Maisena",
					"porcao":
						[
							{
								"quantidade": 5,
								"unidade":[16]
							}
						]
				},
				{	
					"id":6,
					"alimento": "Biscoito Pit Stop / Toda Hora",
					"porcao":
						[
							{
								"quantidade": 5,
								"unidade":[16]
							}
						]
				},
				{	
					"id":7,
					"alimento": "Biscoito Recheado",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16]
							}
						]
				},
				{	
					"id":8,
					"alimento": "Biscoito Salpet",
					"porcao":
						[
							{
								"quantidade": 5,
								"unidade":[16]
							}
						]
				},
				{	
					"id":9,
					"alimento": "Biscoito Waffer",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[16]
							}
						]
				},
				{	
					"id":10,
					"alimento": "Bisnaguinha (tipo Seveb Boys)",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[16]
							}
						]
				},
				{	
					"id":11,
					"alimento": "Bolinho de Mandioca com Carne",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":12,
					"alimento": "Bolo de Baunilha / Bolo Simples",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[18,13]
							}
						]
				},
				{	
					"id":13,
					"alimento": "Bolo de Cenoura",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[18,13]
							}
						]
				},
				{	
					"id":14,
					"alimento": "Bolo de Chocolate Simples (Sem Cobertura)",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[18,13]
							}
						]
				},
				{	
					"id":15,
					"alimento": "Bolo de Fubá",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[18,14]
							}
						]
				},
				{	
					"id":16,
					"alimento": "Bolo Industrializado",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[18,14]
							}
						]
				},
				{	
					"id":17,
					"alimento": "Canjica",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[3]
							}
						]
				},
				{	
					"id":18,
					"alimento": "Cereal em Barra (sem chocolate)",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16]
							}
						]
				},
				{	
					"id":19,
					"alimento": "Cereal em Barra (com chocolate)",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16]
							}
						]
				},
				{	
					"id":20,
					"alimento": "Cereal Matinal",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[12]
							}
						]
				},
				{	
					"id":21,
					"alimento": "Cereal Matinal (All Bran)",
					"porcao":
						[
							{
								"quantidade": 1.5,
								"unidade":[12]
							}
						]
				},
				{	
					"id":22,
					"alimento": "Granola",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":23,
					"alimento": "Panetone",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[18,13]
							}
						]
				},
				{	
					"id":24,
					"alimento": "Pão Árabe / Sírio",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16,13]
							}
						]
				},
				{	
					"id":25,
					"alimento": "Pão de Batata",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":26,
					"alimento": "Pão de Forma",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[18]
							}
						]
				},
				{	
					"id":27,
					"alimento": "Pão de Queijo",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16,15]
							},
							{
								"quantidade": 2,
								"unidade":[16,14]
							},
							{
								"quantidade": 3,
								"unidade":[16,13]
							}
						]
				},
				{	
					"id":28,
					"alimento": "Pão Francês (com miolo)",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16]
							}
						]
				},
				{	
					"id":29,
					"alimento": "Pão Francês (sem miolo)",
					"porcao":
						[
							{
								"quantidade": 1.5,
								"unidade":[16]
							}
						]
				},
				{	
					"id":30,
					"alimento": "Pão Integral (de forma)",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[18]
							}
						]
				},
				{	
					"id":31,
					"alimento": "Pão de Cachorro Quente",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16]
							}
						]
				},
				{	
					"id":32,
					"alimento": "Pão de Hamburguer",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16,13]
							}
						]
				},
				{	
					"id":33,
					"alimento": "Pipoca (Doce / Salgada)",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":34,
					"alimento": "Sucrilhos",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[3]
							}
						]
				},
				{	
					"id":35,
					"alimento": "Torrada",
					"porcao":
						[
							{
								"quantidade": 5,
								"unidade":[16,14]
							}
						]
				}
			]
		},













		{
			"id": 1,
			"nome": "Grandes Refeições (Almoço e Jantar)",
			"descricao": "Grupo dos Cereais",
			"calorias": 150,
			"itens":
			[
				{	
					"id":0,
					"alimento": "Angu",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":1,
					"alimento": "Arroz à Grega/Risoto",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[0]
							},
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":2,
					"alimento": "Arroz Cozido",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[0]
							},
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":3,
					"alimento": "Arroz Integral",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[2]
							},
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":4,
					"alimento": "Batata Doce Cozida",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[18, 13]
							},
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":5,
					"alimento": "Batata Doce Frita",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[18, 15]
							}
						]
				},
				{	
					"id":6,
					"alimento": "Batata Frita (McDonalds)",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[19, 13]
							}
						]
				},
				{	
					"id":7,
					"alimento": "Batata Frita (Ruffles)",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[13]
							},
							{
								"quantidade": 5,
								"unidade":[16]
							}
						]
				},
				{	
					"id":8,
					"alimento": "Batata Inglesa Assada",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 14]
							},
							{
								"quantidade": 2,
								"unidade":[4]
							}
						]
				},
				{	
					"id":9,
					"alimento": "Batata Inglesa Cozida",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[0]
							},
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":10,
					"alimento": "Batata Inglesa Frita",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[0]
							},
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":11,
					"alimento": "Batata Inglesa Sauté",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[3]
							}
						]
				},
				{	
					"id":12,
					"alimento": "Cará / Inhame Cozido",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":13,
					"alimento": "Farelo de Trigo/Aveia",
					"porcao":
						[
							{
								"quantidade": 5,
								"unidade":[3]
							}
						]
				},
				{	
					"id":14,
					"alimento": "Farinha de Mandioca",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":15,
					"alimento": "Farinha de Rosca",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":16,
					"alimento": "Farofa com Ameixa/Passas",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[4]
							}
						]
				},
				{	
					"id":17,
					"alimento": "Farofa com Linguiça",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[4]
							}
						]
				},
				{	
					"id":18,
					"alimento": "Farofa Simples",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[1]
							},
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":19,
					"alimento": "Lasanha",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":20,
					"alimento": "Macarrão Alho e Óleo",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[0]
							}
						]
				},
				{	
					"id":21,
					"alimento": "Macarrão ao Sugo",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[0]
							}
						]
				},
				{	
					"id":22,
					"alimento": "Macarrão à Bolonhesa",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[0]
							},
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":23,
					"alimento": "Macarrão Puro",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[0]
							}
						]
				},
				{	
					"id":24,
					"alimento": "Mandioca Cozida",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[0]
							},
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":25,
					"alimento": "Mandioca Frita",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[4]
							}
						]
				},
				{	
					"id":26,
					"alimento": "Milho Verde (Espiga)",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 15]
							}
						]
				},
				{	
					"id":27,
					"alimento": "Milho Verde (Enlatado)",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":28,
					"alimento": "Nhoque",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":29,
					"alimento": "Panqueca de Carne",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 13]
							},
							{
								"quantidade": 2,
								"unidade":[16, 14]
							}
						]
				},
				{	
					"id":30,
					"alimento": "Pirão",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":31,
					"alimento": "Pizza",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[18, 13]
							}
						]
				},
				{	
					"id":32,
					"alimento": "Purê de Batatas",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[0]
							},
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":33,
					"alimento": "Sopa de Feijão com Macarrão",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":34,
					"alimento": "Sopa de Legumes",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[9, 14]
							}
						]
				},
				{	
					"id":35,
					"alimento": "Sopa de Legumes com Carne",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[9, 14]
							}
						]
				},
				{	
					"id":36,
					"alimento": "Suflê (legumes/queijo)",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[20, 14]
							}
						]
				}
			]		
		},










		{
			"id": 2,
			"nome": "Grandes Refeições (Almoço e Jantar)",
			"descricao": "Grupo das Hortaliças",
			"calorias": 15,
			"itens":
			[
				{	
					"id":0,
					"alimento": "Abóbora Moranga Refogada",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[3]
							}
						]
				},
				{	
					"id":1,
					"alimento": "Abobrinha Refogada",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[3]
							}
						]
				},
				{	
					"id":2,
					"alimento": "Acelga Crua Picada",
					"porcao":
						[
							{
								"quantidade": 5,
								"unidade":[0]
							}
						]
				},
				{	
					"id":3,
					"alimento": "Agrião Cru",
					"porcao":
						[
							{
								"quantidade": 7,
								"unidade":[3]
							},
							{
								"quantidade": 5,
								"unidade":[10]
							},
							{
								"quantidade": 22,
								"unidade":[21]
							}
						]
				},
				{	
					"id":4,
					"alimento": "Alface",
					"porcao":
						[
							{
								"quantidade": 9,
								"unidade":[3]
							},
							{
								"quantidade": 5,
								"unidade":[22]
							}
						]
				},
				{	
					"id":5,
					"alimento": "Almerão Cru",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							},
							{
								"quantidade": 5,
								"unidade":[22]
							}
						]
				},
				{	
					"id":6,
					"alimento": "Beringela Assada",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[18,14]
							}
						]
				},
				{	
					"id":7,
					"alimento": "Beringela Cozida",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":8,
					"alimento": "Beringela Ensopada",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":9,
					"alimento": "Beringela Frita",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[18,13]
							}
						]
				},
				{	
					"id":10,
					"alimento": "Beterraba Cozida",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":11,
					"alimento": "Beterraba Crua (Ralada)",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":12,
					"alimento": "Brócolis Cozida (Vapor)",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[3]
							}
						]
				},
				{	
					"id":13,
					"alimento": "Broto de Bambu",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16]
							}
						]
				},
				{	
					"id":14,
					"alimento": "Broto de Feijão",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[0]
							}
						]
				},
				{	
					"id":15,
					"alimento": "Cenoura Cozida",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":16,
					"alimento": "Cenoura Crua (Ralada)",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":17,
					"alimento": "Cenoura Refogada",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[4]
							}
						]
				},
				{	
					"id":18,
					"alimento": "Chicória Crua",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[10]
							},
							{
								"quantidade": 4,
								"unidade":[22,15]
							},
							{
								"quantidade": 9,
								"unidade":[22,13]
							}
						]
				},
				{	
					"id":19,
					"alimento": "Chicória Refogada",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[4]
							}
						]
				},
				{	
					"id":20,
					"alimento": "Chuchu Refogado",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[4]
							}
						]
				},
				{	
					"id":21,
					"alimento": "Cogumelo (Conserva)",
					"porcao":
						[
							{
								"quantidade": 6,
								"unidade":[16,15]
							},
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":22,
					"alimento": "Couve Refogada",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[4]
							}
						]
				},
				{	
					"id":23,
					"alimento": "Couve-Flor à Milanesa",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[21,13]
							}
						]
				},
				{	
					"id":24,
					"alimento": "Couve-Flor Cozida",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[21,13]
							},
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":25,
					"alimento": "Espinafre Cozido",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":26,
					"alimento": "Jiló Cozida",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[4]
							}
						]
				},
				{	
					"id":27,
					"alimento": "Mostarda Cozida",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":28,
					"alimento": "Palmito (Conserva)",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[4]
							}
						]
				},
				{	
					"id":29,
					"alimento": "Pepino",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16,14]
							},
							{
								"quantidade": 29,
								"unidade":[18,13]
							},
							{
								"quantidade": 5,
								"unidade":[3]
							}
						]
				},
				{	
					"id":30,
					"alimento": "Picles (Conserva)",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":31,
					"alimento": "Pimentão",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[18,14]
							},
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":32,
					"alimento": "Rabanete",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":33,
					"alimento": "Repolho Cozido",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[3]
							}
						]
				},
				{	
					"id":34,
					"alimento": "Repolho Cru",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[3]
							}
						]
				},
				{	
					"id":35,
					"alimento": "Repolho Refogado",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":36,
					"alimento": "Rúcula",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[3]
							},
							{
								"quantidade": 10,
								"unidade":[22]
							}
						]
				},
				{	
					"id":37,
					"alimento": "Salsão Cru",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":38,
					"alimento": "Tomate Cru",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[16,15]
							},
							{
								"quantidade": 1,
								"unidade":[16,13]
							},
							{
								"quantidade": 4,
								"unidade":[3]
							}
						]
				}
			]
		},






















		{
			"id": 3,
			"nome": "Grandes Refeições (Almoço e Jantar)",
			"descricao": "Grupo das Hortaliças",
			"calorias": 15,
			"itens":
			[
				{	
					"id":0,
					"alimento": "Abóbora Moranga Refogada",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[3]
							}
						]
				},
				{	
					"id":1,
					"alimento": "Abobrinha Refogada",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[3]
							}
						]
				},
				{	
					"id":2,
					"alimento": "Acelga Crua Picada",
					"porcao":
						[
							{
								"quantidade": 5,
								"unidade":[0]
							}
						]
				},
				{	
					"id":3,
					"alimento": "Agrião Cru",
					"porcao":
						[
							{
								"quantidade": 7,
								"unidade":[3]
							},
							{
								"quantidade": 5,
								"unidade":[10]
							},
							{
								"quantidade": 22,
								"unidade":[21]
							}
						]
				},
				{	
					"id":4,
					"alimento": "Alface",
					"porcao":
						[
							{
								"quantidade": 9,
								"unidade":[3]
							},
							{
								"quantidade": 5,
								"unidade":[22]
							}
						]
				},
				{	
					"id":5,
					"alimento": "Almerão Cru",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							},
							{
								"quantidade": 5,
								"unidade":[22]
							}
						]
				},
				{	
					"id":6,
					"alimento": "Beringela Assada",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[18,14]
							}
						]
				},
				{	
					"id":7,
					"alimento": "Beringela Cozida",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":8,
					"alimento": "Beringela Ensopada",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":9,
					"alimento": "Beringela Frita",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[18,13]
							}
						]
				},
				{	
					"id":10,
					"alimento": "Beterraba Cozida",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":11,
					"alimento": "Beterraba Crua (Ralada)",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":12,
					"alimento": "Brócolis Cozida (Vapor)",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[3]
							}
						]
				},
				{	
					"id":13,
					"alimento": "Broto de Bambu",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16]
							}
						]
				},
				{	
					"id":14,
					"alimento": "Broto de Feijão",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[0]
							}
						]
				},
				{	
					"id":15,
					"alimento": "Cenoura Cozida",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":16,
					"alimento": "Cenoura Crua (Ralada)",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":17,
					"alimento": "Cenoura Refogada",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[4]
							}
						]
				},
				{	
					"id":18,
					"alimento": "Chicória Crua",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[10]
							},
							{
								"quantidade": 4,
								"unidade":[22,15]
							},
							{
								"quantidade": 9,
								"unidade":[22,13]
							}
						]
				},
				{	
					"id":19,
					"alimento": "Chicória Refogada",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[4]
							}
						]
				},
				{	
					"id":20,
					"alimento": "Chuchu Refogado",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[4]
							}
						]
				},
				{	
					"id":21,
					"alimento": "Cogumelo (Conserva)",
					"porcao":
						[
							{
								"quantidade": 6,
								"unidade":[16,15]
							},
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":22,
					"alimento": "Couve Refogada",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[4]
							}
						]
				},
				{	
					"id":23,
					"alimento": "Couve-Flor à Milanesa",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[21,13]
							}
						]
				},
				{	
					"id":24,
					"alimento": "Couve-Flor Cozida",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[21,13]
							},
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":25,
					"alimento": "Espinafre Cozido",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":26,
					"alimento": "Jiló Cozida",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[4]
							}
						]
				},
				{	
					"id":27,
					"alimento": "Mostarda Cozida",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":28,
					"alimento": "Palmito (Conserva)",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[4]
							}
						]
				},
				{	
					"id":29,
					"alimento": "Pepino",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16,14]
							},
							{
								"quantidade": 29,
								"unidade":[18,13]
							},
							{
								"quantidade": 5,
								"unidade":[3]
							}
						]
				},
				{	
					"id":30,
					"alimento": "Picles (Conserva)",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":31,
					"alimento": "Pimentão",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[18,14]
							},
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":32,
					"alimento": "Rabanete",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":33,
					"alimento": "Repolho Cozido",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[3]
							}
						]
				},
				{	
					"id":34,
					"alimento": "Repolho Cru",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[3]
							}
						]
				},
				{	
					"id":35,
					"alimento": "Repolho Refogado",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":36,
					"alimento": "Rúcula",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[3]
							},
							{
								"quantidade": 10,
								"unidade":[22]
							}
						]
				},
				{	
					"id":37,
					"alimento": "Salsão Cru",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":38,
					"alimento": "Tomate Cru",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[16,15]
							},
							{
								"quantidade": 1,
								"unidade":[16,13]
							},
							{
								"quantidade": 4,
								"unidade":[3]
							}
						]
				}
			]
		},





























		{
			"id": 4,
			"nome": "Pequenas Refeições (Desjejum Lanches e Ceia)",
			"descricao": "Grupo das Frutas",
			"calorias": 70,
			"itens":
			[
				{	
					"id":0,
					"alimento": "Abacate",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":1,
					"alimento": "Abacaxi",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":2,
					"alimento": "Acerola",
					"porcao":
						[
							{
								"quantidade": 10,
								"unidade":[16]
							}
						]
				},
				{	
					"id":3,
					"alimento": "Ameixa (preta/vermelha)",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":4,
					"alimento": "Ameixa Seca",
					"porcao":
						[
							{
								"quantidade": 5,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":5,
					"alimento": "Banana Caturra",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":6,
					"alimento": "Banana Frita",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16,13]
							}
						]
				},
				{	
					"id":7,
					"alimento": "Banana Maça",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":8,
					"alimento": "Banana Ouro",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":9,
					"alimento": "Banana Prata",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":10,
					"alimento": "Caju",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":11,
					"alimento": "Caqui",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16,13]
							}
						]
				},
				{	
					"id":12,
					"alimento": "Carambola",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":13,
					"alimento": "Cereja",
					"porcao":
						[
							{
								"quantidade": 24,
								"unidade":[16]
							}
						]
				},
				{	
					"id":14,
					"alimento": "Figo",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":15,
					"alimento": "Goiaba",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16,13]
							},
							{
								"quantidade": 0.5,
								"unidade":[16,15]
							}
						]
				},
				{	
					"id":16,
					"alimento": "Jabuticaba",
					"porcao":
						[
							{
								"quantidade": 10,
								"unidade":[16]
							}
						]
				},
				{	
					"id":17,
					"alimento": "Kiwi",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16]
							}
						]
				},
				{	
					"id":18,
					"alimento": "Laranja",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16,13]
							},
							{
								"quantidade": 1,
								"unidade":[16,15]
							}
						]
				},
				{	
					"id":19,
					"alimento": "Maçã",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16,13]
							},
							{
								"quantidade": 1,
								"unidade":[16,15]
							}
						]
				},
				{	
					"id":20,
					"alimento": "Mamão Papaya",
					"porcao":
						[
							{
								"quantidade": 5,
								"unidade":[3]
							},
							{
								"quantidade": 0.5,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":21,
					"alimento": "Manga Espada",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16,13]
							},
							{
								"quantidade": 1,
								"unidade":[16,15]
							}
						]
				},
				{	
					"id":22,
					"alimento": "Manga Grande",
					"porcao":
						[
							{
								"quantidade": 0.25,
								"unidade":[16]
							}
						]
				},
				{	
					"id":23,
					"alimento": "Melancia",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[18,15]
							},
							{
								"quantidade": 3,
								"unidade":[18,13]
							}
						]
				},
				{	
					"id":24,
					"alimento": "Melão",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[18,15]
							},
							{
								"quantidade": 0.5,
								"unidade":[16,13]
							}
						]
				},
				{	
					"id":25,
					"alimento": "Morango",
					"porcao":
						[
							{
								"quantidade": 6,
								"unidade":[16,13]
							},
							{
								"quantidade": 4,
								"unidade":[16,15]
							}
						]
				},
				{	
					"id":26,
					"alimento": "Nectarina",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":27,
					"alimento": "Noz",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16]
							}
						]
				},
				{	
					"id":28,
					"alimento": "Pêra",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16,14]
							}
						]
				},
				{	
					"id":29,
					"alimento": "Pêssego",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16,14]
							},
							{
								"quantidade": 4,
								"unidade":[16,13]
							}
						]
				},
				{	
					"id":30,
					"alimento": "Salada de Frutas",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":31,
					"alimento": "Suco de  Frutas Industrializado",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[23,14]
							}
						]
				},
				{	
					"id":32,
					"alimento": "Uva Itália / Rubi",
					"porcao":
						[
							{
								"quantidade": 10,
								"unidade":[24]
							}
						]
				},
				{	
					"id":33,
					"alimento": "Uva Comum",
					"porcao":
						[
							{
								"quantidade": 12,
								"unidade":[24]
							}
						]
				}
			]
		},












		{
			"id": 5,
			"nome": "Pequenas Refeições (Desjejum Lanches e Ceia)",
			"descricao": "Grupo dos Leites e Derivados",
			"calorias": 120,
			"itens":
			[
				{	
					"id":0,
					"alimento": "Creme de Leite",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[4]
							}
						]
				},
				{	
					"id":1,
					"alimento": "Danoninho",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[25,13]
							},
							{
								"quantidade": 1,
								"unidade":[25,14]
							}
						]
				},
				{	
					"id":2,
					"alimento": "Iogurte",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16]
							}
						]
				},
				{	
					"id":3,
					"alimento": "Iogurte Light",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16]
							}
						]
				},
				{	
					"id":4,
					"alimento": "Iogurte para Beber",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16]
							}
						]
				},
				{	
					"id":5,
					"alimento": "Leite Condensado",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[6]
							}
						]
				},
				{	
					"id":6,
					"alimento": "Leite Desnatado",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[23,15]
							}
						]
				},
				{	
					"id":7,
					"alimento": "Leite em Pó",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							},
							{
								"quantidade": 5,
								"unidade":[7]
							}
						]
				},
				{	
					"id":8,
					"alimento": "Leite Integral",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[23,13]
							}
						]
				},
				{	
					"id":9,
					"alimento": "Leite Semi-Desnatado",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[23,14]
							}
						]
				},
				{	
					"id":10,
					"alimento": "Leite Maltado (com achocolatado)",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[12]
							}
						]
				},
				{	
					"id":11,
					"alimento": "Leite de Soja",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[23,15]
							}
						]
				},
				{	
					"id":12,
					"alimento": "Molho Branco",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":13,
					"alimento": "Queijo Cheddar",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":14,
					"alimento": "Queijo Cottage",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":15,
					"alimento": "Queijo de Soja (Tofu)",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[18,14]
							}
						]
				},
				{	
					"id":16,
					"alimento": "Queijo Minas / Canastra",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[18,14]
							}
						]
				},
				{	
					"id":17,
					"alimento": "Queijo Minas Frescal",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[18,15]
							}
						]
				},
				{	
					"id":18,
					"alimento": "Queijo Mozzarella",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[18,14]
							}
						]
				},
				{	
					"id":19,
					"alimento": "Queijo Parmezão",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":20,
					"alimento": "Queijo Polenguinho",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16]
							}
						]
				},
				{	
					"id":21,
					"alimento": "Queijo Prato",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[18,15]
							}
						]
				},
				{	
					"id":22,
					"alimento": "Queijo Ricota",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[18,14]
							}
						]
				},
				{	
					"id":23,
					"alimento": "Requeijão",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":24,
					"alimento": "Requeijão Light",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				}
			]
		},





















		{
			"id": 6,
			"nome": "Grandes Refeições (Almoço e Jantar)",
			"descricao": "Grupo das Carnes e Ovos",
			"calorias": 190,
			"itens":
			[
				{	
					"id":0,
					"alimento": "Almôndegas",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[16,13]
							}
						]
				},
				{	
					"id":1,
					"alimento": "Almôndegas de Peru Light",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[16]
							}
						]
				},
				{	
					"id":2,
					"alimento": "Atum (enlatado)",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":3,
					"alimento": "Bacalhoada",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":4,
					"alimento": "Camarão Ensopado",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[16,15]
							}
						]
				},
				{	
					"id":5,
					"alimento": "Camarão Frito",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":6,
					"alimento": "Carne de Boi Assada",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[18,13]
							}
						]
				},
				{	
					"id":7,
					"alimento": "Carne de Boi - Bife à Rolê",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 15]
							}
						]
				},
				{	
					"id":8,
					"alimento": "Carne de Boi - Bife Acebolado",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 14]
							}
						]
				},
				{	
					"id":9,
					"alimento": "Carne de Boi - Costela Assada",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[20, 14]
							}
						]
				},
				{	
					"id":10,
					"alimento": "Carne de Boi Ensopada",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[16, 14]
							}
						]
				},
				{	
					"id":11,
					"alimento": "Carne de Boi - Espetinho",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16]
							}
						]
				},
				{	
					"id":12,
					"alimento": "Carne de Boi - Filé à Parmegiana",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":13,
					"alimento": "Carne de Boi - Hamburguer",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16, 14]
							}
						]
				},
				{	
					"id":14,
					"alimento": "Carne de Boi - Moída",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":15,
					"alimento": "Carne de Porco - Costela Assada",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 14]
							}
						]
				},
				{	
					"id":16,
					"alimento": "Carne de Porco - Feijoada Caseira",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[9, 14]
							}
						]
				},
				{	
					"id":17,
					"alimento": "Carne de Porco - Feijoada Enlatada",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[9, 14]
							}
						]
				},
				{	
					"id":18,
					"alimento": "Coração de Galinha",
					"porcao":
						[
							{
								"quantidade": 5,
								"unidade":[16, 14]
							}
						]
				},
				{	
					"id":19,
					"alimento": "Filé de Frango Grelhado",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 14]
							}
						]
				},
				{	
					"id":20,
					"alimento": "Filé de Frango à Milanesa",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":21,
					"alimento": "Frango ao Molho Pardo - Asa",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16, 15]
							},
							{
								"quantidade": 3,
								"unidade":[16, 14]
							},
							{
								"quantidade": 4,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":22,
					"alimento": "Frango ao Molho Pardo - Coxa",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16, 15]
							},
							{
								"quantidade": 4,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":23,
					"alimento": "Frango ao Molho Pardo - Peito",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[16, 15]
							},
							{
								"quantidade": 1,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":24,
					"alimento": "Frango ao Molho Pardo - Sobrecoxa",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 15]
							},
							{
								"quantidade": 2,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":25,
					"alimento": "Frango Assado - Asa",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16, 15]
							},
							{
								"quantidade": 3,
								"unidade":[16, 14]
							},
							{
								"quantidade": 4,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":26,
					"alimento": "Frango Assado - Coxa",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16, 15]
							},
							{
								"quantidade": 3,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":27,
					"alimento": "Frango Assado - Desfiado",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":28,
					"alimento": "Frango Assado - Passarinho",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":29,
					"alimento": "Frango Assado - Peito",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[16, 15]
							},
							{
								"quantidade": 1,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":30,
					"alimento": "Frango Assado - Sobrecoxa",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 15]
							},
							{
								"quantidade": 3,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":31,
					"alimento": "Frango Ensopado - Asa",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 15]
							},
							{
								"quantidade": 2,
								"unidade":[16, 14]
							},
							{
								"quantidade": 3,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":32,
					"alimento": "Frango Ensopado - Coxa",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16, 15]
							},
							{
								"quantidade": 3,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":33,
					"alimento": "Frango Ensopado - Desfiado",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":34,
					"alimento": "Frango Ensopado - Passarinho",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":35,
					"alimento": "Frango Ensopado - Peito",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[16, 15]
							},
							{
								"quantidade": 1,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":36,
					"alimento": "Frango Ensopado - Sobrecoxa",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 15]
							},
							{
								"quantidade": 2,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":37,
					"alimento": "Frango Frito - Asa",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16, 15]
							},
							{
								"quantidade": 4,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":38,
					"alimento": "Frango Frito - Coxa",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16, 15]
							},
							{
								"quantidade": 4,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":39,
					"alimento": "Frango Frito - Desfiado",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":40,
					"alimento": "Frango Frito - Passarinho",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":41,
					"alimento": "Frango Frito - Peito",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[16, 15]
							},
							{
								"quantidade": 1,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":42,
					"alimento": "Frango Frito - Sobrecoxa",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 15]
							},
							{
								"quantidade": 2,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":43,
					"alimento": "Moela de Frango",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16, 15]
							},
							{
								"quantidade": 4,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":44,
					"alimento": "Nuggets",
					"porcao":
						[
							{
								"quantidade": 4,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":45,
					"alimento": "Omelete",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 14]
							}
						]
				},
				{	
					"id":46,
					"alimento": "Ovo de Codorna Cozido",
					"porcao":
						[
							{
								"quantidade": 5,
								"unidade":[16]
							}
						]
				},
				{	
					"id":47,
					"alimento": "Ovo de Galinha Cozido",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":48,
					"alimento": "Ovo de Codorna Frito",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 15]
							},
							{
								"quantidade": 2,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":49,
					"alimento": "Ovos Mexidos",
					"porcao":
						[
							{
								"quantidade": 3.5,
								"unidade":[3]
							}
						]
				},
				{	
					"id":50,
					"alimento": "Peixe à Milanesa",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[26, 15]
							},
							{
								"quantidade": 1,
								"unidade":[26, 13]
							}
						]
				},
				{	
					"id":51,
					"alimento": "Peixe Assado ou Cozido",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[26, 14]
							},
							{
								"quantidade": 1,
								"unidade":[26, 13]
							}
						]
				},
				{	
					"id":52,
					"alimento": "Peixe Ensopado",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[26, 15]
							}
						]
				},
				{	
					"id":53,
					"alimento": "Peixe Frito",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[26, 13]
							}
						]
				},
				{	
					"id":54,
					"alimento": "Salame",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[18, 14]
							}
						]
				},
				{	
					"id":55,
					"alimento": "Salaminho",
					"porcao":
						[
							{
								"quantidade": 5,
								"unidade":[18, 14]
							}
						]
				},
				{	
					"id":56,
					"alimento": "Salpicão de Frango",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":57,
					"alimento": "Salsicha (Enlatada)",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16, 14]
							}
						]
				},
				{	
					"id":58,
					"alimento": "Salsicha Hot Dog",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 15]
							}
						]
				},
				{	
					"id":59,
					"alimento": "Salsichõo",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[16, 13]
							}
						]
				},
				{	
					"id":60,
					"alimento": "Sardinha (Enlatada)",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16, 14]
							}
						]
				},
				{	
					"id":61,
					"alimento": "Sardinha Frita",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[16, 14]
							}
						]
				},
				{	
					"id":62,
					"alimento": "Strogonoff de Carne",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":63,
					"alimento": "Strogonoff de Frango",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":64,
					"alimento": "Sushi",
					"porcao":
						[
							{
								"quantidade": 5,
								"unidade":[16]
							}
						]
				},
				{	
					"id":65,
					"alimento": "Frios - Apresuntado",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[18,14]
							}
						]
				},
				{	
					"id":66,
					"alimento": "Frios - Mortadela",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[18,14]
							}
						]
				},
				{	
					"id":67,
					"alimento": "Frios - Presunto",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[18,14]
							}
						]
				},
				{	
					"id":68,
					"alimento": "Frios - Salaminho",
					"porcao":
						[
							{
								"quantidade": 6,
								"unidade":[18]
							}
						]
				}
			]
		},




























		{
			"id": 7,
			"nome": "Grandes Refeições (Almoço e Jantar)",
			"descricao": "Grupo das Leguminosas",
			"calorias": 55,
			"itens":
			[
				{	
					"id":0,
					"alimento": "Ervilha (Enlatada)",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[4]
							}
						]
				},
				{	
					"id":1,
					"alimento": "Feijão Branco",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[4]
							}
						]
				},
				{	
					"id":2,
					"alimento": "Feijão Mulatinho",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[9,14]
							},
							{
								"quantidade": 6,
								"unidade":[3]
							}
						]
				},
				{	
					"id":3,
					"alimento": "Feijão Preto",
					"porcao":
						[
							{
								"quantidade": 3,
								"unidade":[3]
							}
						]
				},
				{	
					"id":4,
					"alimento": "Grão-de-Bico Cozido",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":5,
					"alimento": "Lentilha Cozida",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[4]
							}
						]
				},
				{	
					"id":6,
					"alimento": "Tutu de Feijão",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[0]
							},
							{
								"quantidade": 2,
								"unidade":[4]
							}
						]
				},
				{	
					"id":7,
					"alimento": "Vagem Cozida",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				},
				{	
					"id":8,
					"alimento": "Vagem Refogada",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":9,
					"alimento": "Soja",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[9,14]
							}
						]
				}
			]
		},





















		{
			"id": 8,
			"nome": "Alimentos que devem ser Consimudos com Moderação",
			"descricao": "Grupo dos Óleos e das Gorduras",
			"calorias": 55,
			"itens":
			[
				{	
					"id":0,
					"alimento": "Azeite de Dendê",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[4]
							}
						]
				},
				{	
					"id":1,
					"alimento": "Azeite de Oliva",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":2,
					"alimento": "Gordura Vegetal Hidrogenada",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[7]
							}
						]
				},
				{	
					"id":3,
					"alimento": "Linhaça Triturada",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":4,
					"alimento": "Halvarina",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[7]
							}
						]
				},
				{	
					"id":5,
					"alimento": "Manteiga",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[4]
							}
						]
				},
				{	
					"id":6,
					"alimento": "Manteiga Culinária",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[4]
							}
						]
				},
				{	
					"id":7,
					"alimento": "Margarina Líquida",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":8,
					"alimento": "Margarina Vegetal",
					"porcao":
						[
							{
								"quantidade": 0.5,
								"unidade":[4]
							}
						]
				},
				{	
					"id":9,
					"alimento": "Maionese",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[4]
							}
						]
				},
				{	
					"id":10,
					"alimento": "Óleo Vegetal",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				},
				{	
					"id":11,
					"alimento": "Óleo Vegetal Composto (Soja + Oliva)",
					"porcao":
						[
							{
								"quantidade": 1,
								"unidade":[3]
							}
						]
				}

			]
		}








	]



export default grupos