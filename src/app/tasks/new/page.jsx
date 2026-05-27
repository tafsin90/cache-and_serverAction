import { updateTask } from "@/lib/actions";
import { Input, Label, TextField, Select, ListBox, Button } from "@heroui/react";

const NewTaskPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold">Add a new Task</h2>
      <div>
        <form action={updateTask} className="flex flex-col gap-4">
          <TextField className="w-full" name="title" type="text" variant="secondary">
            <Label>Title</Label>
            <Input placeholder="Enter task title" />
          </TextField>
          <TextField className="w-full" name="description" type="text" variant="secondary">
            <Label>Description</Label>
            <Input placeholder="Enter task description" />
          </TextField>

          {/* status dropdown */}
          <Select name="status" className="w-[256px]" placeholder="Select one">
            <Label>Status</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="pending" textValue="Pending">
                  Pending
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="in-progress" textValue="In Progress">
                  In Progress
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="completed" textValue="Completed">
                  Completed
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          {/* priority dropdown */}
          <Select name="priority" className="w-[256px]" placeholder="Select one">
            <Label>Priority</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="low" textValue="Low">
                  Low
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="medium" textValue="Medium">
                  Medium
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="high" textValue="High">
                  High
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button type="submit">Add Task</Button>
        </form>
      </div>
    </div>
  );
};

export default NewTaskPage;
