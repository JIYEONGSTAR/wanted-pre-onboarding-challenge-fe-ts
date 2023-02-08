type Tag = [string, string]; //TAG는 id가 string 내용이 string
interface todo {
  //todo interface
  id: string;
  content: string;
  completed: boolean;
  category: string;
  tags?: Tag[];
}

//할 일 추가, 내용은 필수
type Create = (content: string, category: string, tags?: Tag) => void;

//Read parameter id는 선택가능
type Read = (id?: string) => todo[];

//Update id를 제외한 모든 속성 수정가능
type UpdateValue = {
  (
    id: string,
    content?: string,
    completed?: boolean,
    category?: string,
    tags?: Tag[]
  ): todo;
};

//ID의 특정 태그 수정
type UpdateTagById = {
  (id: string, tagId: string, tagContent: Tag): todo;
};

//ID를 기반으로 할 일 삭제
type DeleteById = (id: string) => void;
//전체 할 일 삭제
type DeleteAll = () => void;
//특정할일의 특정 태그 삭제, 특정 할 일의 모든 태그 삭제
type DeleteTag = (id: string, tagId?: string) => todo;
