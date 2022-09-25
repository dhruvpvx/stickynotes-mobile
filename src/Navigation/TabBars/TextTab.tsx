import React from 'react';
import {Container, TextNoteCard} from '../../Copmponets';
import {noteType} from '../../Redux/Slices/NotesSlice';
import {useAppSelector} from '../../Redux/store';

type Props = {};

const TextTab = (props: Props) => {
  const data = useAppSelector((state: any) =>
    state.allNotes.filter((note: noteType) => note.type === 'text'),
  );

  const renderData = (item: noteType) => {
    return <TextNoteCard key={item.id} {...item} />;
  };

  return (
    <Container>{data.map((item: noteType) => renderData(item))}</Container>
  );
};

export default TextTab;
