CREATE TABLE `usuarios` (
  `id` integer PRIMARY KEY,
  `nome` varchar(255),
  `email` varchar(255),
  `data_conta` timestamp
);

CREATE TABLE `admin` (
  `id` integer PRIMARY KEY,
  `nome` varchar(255),
  `email` varchar(255)
);

CREATE TABLE `doacoes` (
  `id` integer PRIMARY KEY,
  `id_usuario` integer,
  `id_admin` integer,
  `id_transacao` varchar(255),
  `valor` double,
  `data_doacao` timestamp,
  `status` varchar(255)
);

ALTER TABLE `doacoes` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

ALTER TABLE `doacoes` ADD FOREIGN KEY (`id_admin`) REFERENCES `admin` (`id`);
