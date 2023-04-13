import React, { useState } from 'react';
import {
	StyledMainContent,
	StyledTextBox,
	StyledButton,
	StyledLoading
} from './styles';
import CircleLoader from "react-spinners/CircleLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Onboarding() {
	const [name, setName] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	return (
		<StyledMainContent>
			{isLoading ? (
				<StyledLoading>
					<CircleLoader
						color={"#000"}
						loading={isLoading}
						cssOverride={override}
						size={60}
						aria-label="Loading Spinner"
						data-testid="loader"
					/>
					<p>Carregando...</p>
				</StyledLoading>
			) : (
				<>
					<img src="https://img.freepik.com/fotos-premium/console-de-jogos-retro-e-pad-em-fundo-verde-criado-usando-tecnologia-generativa-de-ia_772924-1916.jpg" alt="imagem do jogo" />
					<StyledTextBox>
						<p>um texto aleatorio</p>
						<StyledButton>Continuar</StyledButton>
					</StyledTextBox>
				</>
			)}
		</StyledMainContent>
	);
}

export default Onboarding;
