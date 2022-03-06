#Tela de login e esqueceu a senha utilizando React com Next

Projeto utilizando o Next como um React Framework. Desenvolvido por um aprendiz de desenvolvimento.
Na tentativa de criar uma tela de login para um projeto maior.

##Componentes

Utilizando a técnica de criar componentes e montar as páginas renderizando-os. Assim temos um código bem componentizado facilitando assim a manutenção e refatoração do código.

###Submit

Criei um componente Submit que possui o botão de submit que deve ser carregado em todo o sistema. Trata-se de um sistema que tem muitos formulários e sunmits. Dessa forma vamos centralizar todas as ações de Submit do sistema em um único lugar. Para isso, passamos o tipo de formulário através de props e tratamos qual API vamos direcionar o formulário.

###API

Utilizando o sistema de rotas do Next montamos a URL com os valores dos inputs. Na API tratamos a URL e montamos um JSON com os dados enviados.

#Bibliotecas

##MUI

Utilizamos o Material UI, MUI, para montar o layout. Aqui a autodefinição "MUI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your design system and develop React applications faster."

##YUP

Aqui vamos de validação de campos. Validar Inputs é algo chato e trabalhoso. Utilizamos o YUP para criar as regras e retornar as mensagens de erros. Muita gente utiliza o YUP junto com o FORMIK, mas optei por não usá-lo e tentar aprender na marra.

#Observações

Ainda falta fazer a validação do usuário de fato. Criptografar a senha. Ainda não sei como fazer isso e vou estudar possibilidades como o [Cognito] (https://aws.amazon.com/pt/cognito/) ou [Active-Directory] (https://docs.microsoft.com/pt-br/azure/active-directory/authentication/).

Caso você tenha alguma sugestão de melhorias ou dicas comenta aí.

#Configurações

[Next] (https://nextjs.org/docs/getting-started)
[MUI] (https://mui.com/pt/)
[YUP] (https://yarnpkg.com/package/yup)

##Para formatação de código

Utilizo o Prettier, ESLint e Simple React. Alguns links que podem ajudar nessa configuração:

[Prettier] (https://prettier.io/)
[ESLint] (https://eslint.org/)
[Simple-React-Snippets] (https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

Alguns artigos que ajudam nessa configuração:

[ESLint+Prettier] (https://medium.com/cwi-software/eslint-prettier-a-dupla-perfeita-para-produtividade-e-padroniza%C3%A7%C3%A3o-de-c%C3%B3digo-6a7730cfa358)

[Prettier-config] (https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code-pt)
