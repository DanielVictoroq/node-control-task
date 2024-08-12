    insert into
        aux_types(id, name)
    VALUES
        (1, 'Débitos'),
        (2, 'Créditos'),
        (3, 'Tarefas');

    insert into
        types(id, name)
    VALUES
        (1, 'Boleto'),
        (2, 'Cartão de Crédito'),
        (3, 'Resgates'),
        (4, 'Salário'),
        (5, 'Depósito'),
        (6, 'Avulsos'),
        (7, 'Pagamentos de Boletos'),
        (8, 'Reuniões'),
        (9, 'Depósitos'),
        
    insert into
        types_aux_types(id, aux_types_id)
    VALUES
        (1, 1),
        (2, 1),
        (3, 1),
        (3, 2),
        (4, 2),
        (5, 2),
        (5, 3),
        (6, 2),
        (7, 3),
        (8, 3);