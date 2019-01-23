CREATE TABLE IF NOT EXISTS USUARIOS(
    id INT NOT NULL AUTO_INCREMENT,
    usuario VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    nome VARCHAR(255) NOT NULL DEFAULT "UNKNOW",
    email VARCHAR(255),
    nivel INT DEFAULT 1 NOT NULL,
    stat BINARY,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS E_USUARIOS(
    data DATE NOT NULL,
    manha INT NOT NULL DEFAULT 0,
    tarde INT NOT NULL DEFAULT 0,
    noite INT NOT NULL DEFAULT 0,
    PRIMARY KEY (data)
);

CREATE TABLE IF NOT EXISTS LIVROS(
    codigo VARCHAR(255) NOT NULL,
    estante VARCHAR(255),
    titulo VARCHAR(255),
    link VARCHAR(255),
    PRIMARY KEY(codigo)
);

CREATE TABLE IF NOT EXISTS LOG(
    id INT NOT NULL AUTO_INCREMENT,
    codigo INT NOT NULL,
    USUARIOS_usuario VARCHAR(255) NOT NULL,
    mensagem VARCHAR(255) NOT NULL,
    FOREIGN KEY (USUARIOS_usuario) REFERENCES USUARIOS(usuario) ON DELETE NO ACTION ON UPDATE NO ACTION,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS CONSULTA_LOCAL(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    LIVROS_codigo VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    FOREIGN KEY (LIVROS_codigo) REFERENCES LIVROS(codigo) ON DELETE NO ACTION ON UPDATE NO ACTION
);