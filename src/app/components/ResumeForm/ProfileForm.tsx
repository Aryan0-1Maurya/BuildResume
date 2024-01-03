import { BaseForm } from "components/ResumeForm/Form";
import { Input, Textarea } from "components/ResumeForm/Form/InputGroup";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { changeProfile, selectProfile } from "lib/redux/resumeSlice";
import { ResumeProfile } from "lib/redux/types";

export const ProfileForm = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const { name, email, phone, url, summary, location } = profile;

  const handleProfileChange = (field: keyof ResumeProfile, value: string) => {
    dispatch(changeProfile({ field, value }));
  };

  return (
    <BaseForm>
      <div className="grid grid-cols-6 gap-3">
        <Input
          label="Name"
          labelClassName="col-span-full"
          name="name"
          placeholder="Aryan Maurya"
          value={name}
          onChange={handleProfileChange}
        />
        <Textarea
          label="Objective"
          labelClassName="col-span-full"
          name="summary"
          placeholder="Singer Rapper programmer &and educator obsessed with making education free for anyone"
          value={summary}
          onChange={handleProfileChange}
        />
        <Input
          label="Email"
          labelClassName="col-span-4"
          name="email"
          placeholder="aaurxxxxxxxxx@gmail.com"
          value={email}
          onChange={handleProfileChange}
        />
        <Input
          label="Phone"
          labelClassName="col-span-2"
          name="phone"
          placeholder="+91 XXXXXXXX21"
          value={phone}
          onChange={handleProfileChange}
        />
        <Input
          label="Website"
          labelClassName="col-span-4"
          name="url"
          placeholder="amsrportfolio.netlify.app"
          value={url}
          onChange={handleProfileChange}
        />
        <Input
          label="Location"
          labelClassName="col-span-2"
          name="location"
          placeholder="In, U.P"
          value={location}
          onChange={handleProfileChange}
        />
      </div>
    </BaseForm>
  );
};
