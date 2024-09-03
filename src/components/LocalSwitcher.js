import { useTranslations } from "next-intl";
import useTarot from "@/hook/useTarot";

export default function LocaleSwitcher () {
  
  const t = useTranslations('Footer');
  const {onSelectChange, localActive, isPending} = useTarot();

  return (
    <>
      <label className="rounded-md bg-slate-700 py-2 px-1.5 cursor-pointer">
        <p className="sr-only">Change Language</p>
        <select 
          defaultValue={localActive}
          className="bg-transparent cursor-pointer"
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option className="bg-gray-800 text-white font-medium" value='es'>Español</option>
          <option className="bg-gray-800 text-white font-medium" value='en'>English</option>
        </select>
      </label>
    </>
  );
}