import { Button, ButtonGroup, Item, Segment } from "semantic-ui-react";
import { Category } from "../../app/models/category";


interface Props {
    categories: Category[];
  }
  
  export default function CategoryMenu({ categories }: Props) {
    return (
      <Segment inverted color="violet">
      <ButtonGroup width='Category.length' devided font-family="Courier New,monospace">
        {categories.map((category) => (
           <Item key={category.id}></Item>
        ))}
        <Button content={'${category.name'}></Button>
        </ButtonGroup>
        </Segment>
    );
  }