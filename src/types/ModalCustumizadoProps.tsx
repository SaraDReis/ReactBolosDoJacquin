export interface ModalCustomizadoProps {
    mostrarModalQuando: boolean;
    aoCancelar: () => void; //função que nao retorna nada, ao cancelar essa proprieade retorna uma função, que vc vai add//
    titulo: string;
    corpo: string | React.ReactNode;
    textoBotaoConfirmacao?: string; //o ? ele fala que essa informação é opcional
    textoBotaoCancelamento?: string;
    aoConfirmar?: () => void;
    customizarBotoes?: boolean; //se essa prop for verdadeira a gente consegue fazer a customização se for falsa vai estar inativa 
    exibirConteudoCentralizado?: boolean;
}