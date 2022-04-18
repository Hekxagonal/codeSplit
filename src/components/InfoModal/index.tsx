import Button from '../Button';
import * as S from './styles';

export interface iComponent {
  content: {
    name: string;
    last_name: string;
    title: string;
    level: 'Student' | 'Junior' | 'Senior' | 'Pleno';
    linkedIn: string;
    github: string;
    open_to_work: boolean;
    codeSplit_team?: string;
  };
  confirm: () => void;
}

const InfoModal = ({ content }: iComponent) => {
  return (
    <S.Container>
      <S.Title>Dados Obtidos do Github:</S.Title>
      <S.Limiter>{'{'}</S.Limiter>
      <S.Row>
        <S.Key>name:</S.Key>
        <S.Value>{content.name};</S.Value>
      </S.Row>
      <S.Row>
        <S.Key>last_name:</S.Key>
        <S.Value>{content.last_name};</S.Value>
      </S.Row>
      <S.Row>
        <S.Key>title:</S.Key>
        <S.Value>{content.title};</S.Value>
      </S.Row>
      <S.Row>
        <S.Key>level:</S.Key>
        <S.Value>{content.level};</S.Value>
      </S.Row>
      <S.Row>
        <S.Key>github:</S.Key>
        <S.Value>{content.github};</S.Value>
      </S.Row>
      <S.Row>
        <S.Key>open_to_work:</S.Key>
        <S.Bool>{content.open_to_work.toString()};</S.Bool>
      </S.Row>
      <S.Limiter>{'}'}</S.Limiter>

      <S.Button>
        <Button onClick={confirm}>Confirm</Button>
      </S.Button>
    </S.Container>
  );
};

export default InfoModal;
