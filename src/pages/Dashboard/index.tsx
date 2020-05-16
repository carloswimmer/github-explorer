import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form action="">
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/19734511?s=460&u=fb80f3f7234f32cbf254c410aaeaac64323d2453&v=4"
          alt="Carlos Wimmer"
        />
        <div>
          <strong>carloswimmer/devradar-web</strong>
          <p>
            Webapp to register developers to be found by DevRadar mobile app.
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/19734511?s=460&u=fb80f3f7234f32cbf254c410aaeaac64323d2453&v=4"
          alt="Carlos Wimmer"
        />
        <div>
          <strong>carloswimmer/devradar-web</strong>
          <p>
            Webapp to register developers to be found by DevRadar mobile app.
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/19734511?s=460&u=fb80f3f7234f32cbf254c410aaeaac64323d2453&v=4"
          alt="Carlos Wimmer"
        />
        <div>
          <strong>carloswimmer/devradar-web</strong>
          <p>
            Webapp to register developers to be found by DevRadar mobile app.
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
