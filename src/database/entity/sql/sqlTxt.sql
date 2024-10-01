insert into
    aux_types(id, name)
VALUES
    (1, 'Débitos'),
    (2, 'Créditos'),
    (3, 'Tarefas');

insert into
    types(id, name, type_id)
VALUES
    (1, 'Boleto', 1),
    (2, 'Cartão de Crédito', 1),
    (3, 'Saque', 1),
    (4, 'Outros', 1),
    (5, 'Salário', 2),
    (6, 'Depósito', 2),
    (7, 'Avulsos', 2),
    (8, 'Outros', 2),
    (9, 'Pagamentos de Boletos', 3),
    (10, 'Reuniões', 3),
    (11, 'Depositar', 3),
    (12, 'Sacar', 3),
    (13, 'Outros', 3);