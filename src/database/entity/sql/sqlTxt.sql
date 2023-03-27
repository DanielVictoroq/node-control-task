insert into
    aux_types(id, name)
VALUES
    (1, 'Débitos'),
    (2, 'Créditos'),
    (3, 'Tarefas');

insert into
    types(id, name, aux_types_id)
VALUES
    (1, 'Boleto', 1),
    (2, 'Cartão de Crédito', 1),
    (3, 'Resgates', 1),
    (4, 'Salário', 2),
    (5, 'Depósito', 2),
    (6, 'Avulsos', 2),
    (7, 'Pagamentos de Boletos', 3),
    (8, 'Reuniões', 3),
    (9, 'Depósitos', 3),
    (10, 'Resgates', 3);