const grupos =
	[
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
			"id": 1,
			"nome": "Grandes Refeições (Almoço e Jantar)",
			"descricao": "Grupo das Hortaliças",
			"calorias": 15,
			"itens":
			[
				{	
					"id":37,
					"alimento": "Teste",
					"porcao":
						[
							{
								"quantidade": 2,
								"unidade":[3]
							}
						]
				}
			]
		}

	]

	export default grupos