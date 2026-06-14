import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon, Check } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { SERVICE_CATEGORIES, SALON } from "@/data/salon";

const TIMES = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00",
  "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00",
];

const initial = {
  name: "",
  phone: "",
  service: "",
  date: null,
  time: "",
  comment: "",
};

export default function Booking() {
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  // Allow other sections (Services) to pre-fill the service via custom event
  useEffect(() => {
    const handler = (e) => {
      if (e?.detail) {
        setForm((f) => ({ ...f, service: e.detail }));
        toast.success("услуга выбрана: " + e.detail);
      }
    };
    window.addEventListener("vskolz:select-service", handler);
    return () => window.removeEventListener("vskolz:select-service", handler);
  }, []);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    if (!form.name.trim()) return "укажите имя";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 7) return "укажите корректный телефон";
    if (!form.service) return "выберите услугу";
    if (!form.date) return "выберите дату";
    if (!form.time) return "выберите время";
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }
    setSubmitting(true);
    try {
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        service: form.service,
        date: format(form.date, "yyyy-MM-dd"),
        time: form.time,
        comment: form.comment.trim(),
      };
      const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
      await axios.post(`${API}/bookings`, payload);
      toast.success("заявка отправлена! мы свяжемся с вами для подтверждения.");
      setDone(true);
      setForm(initial);
      window.setTimeout(() => setDone(false), 4000);
    } catch (err) {
      toast.error("не удалось отправить. попробуйте позже или позвоните нам.");
      // eslint-disable-next-line no-console
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      data-testid="booking-section"
      className="px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-[#2A2724] text-[#F5EFE6]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <p className="kicker !text-[#C4A484]">запись</p>
          <h2 className="font-display lowercase text-5xl md:text-6xl leading-[0.95]">
            оставьте<br /> заявку
          </h2>
          <p className="text-[#F5EFE6]/70 text-base md:text-lg max-w-md font-light leading-relaxed">
            мы перезвоним в течение 30 минут в рабочее время, подтвердим запись и подберём время.
          </p>

          <div className="mt-4 space-y-3 text-sm">
            <a
              href={`tel:${SALON.phoneRaw}`}
              data-testid="booking-phone"
              className="block link-underline text-[#F5EFE6]"
            >
              {SALON.phone}
            </a>
            <a
              href={SALON.whatsapp}
              target="_blank"
              rel="noreferrer"
              data-testid="booking-whatsapp"
              className="block link-underline text-[#F5EFE6]"
            >
              whatsapp →
            </a>
            <p className="kicker !text-[#F5EFE6]/60">{SALON.hours}</p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5"
          data-testid="booking-form"
        >
          <Field label="имя">
            <Input
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="ваше имя"
              data-testid="booking-input-name"
              className="bg-transparent border-0 border-b border-[#F5EFE6]/30 rounded-none focus-visible:ring-0 focus-visible:border-[#F5EFE6] text-[#F5EFE6] placeholder:text-[#F5EFE6]/40 h-12 px-0"
            />
          </Field>

          <Field label="телефон">
            <Input
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+7 (___) ___-__-__"
              type="tel"
              data-testid="booking-input-phone"
              className="bg-transparent border-0 border-b border-[#F5EFE6]/30 rounded-none focus-visible:ring-0 focus-visible:border-[#F5EFE6] text-[#F5EFE6] placeholder:text-[#F5EFE6]/40 h-12 px-0"
            />
          </Field>

          <div className="md:col-span-2">
            <Field label="услуга">
              <Select value={form.service} onValueChange={(v) => update("service", v)}>
                <SelectTrigger
                  data-testid="booking-select-service"
                  className="w-full bg-transparent border-0 border-b border-[#F5EFE6]/30 rounded-none focus:ring-0 text-[#F5EFE6] data-[placeholder]:text-[#F5EFE6]/40 h-12 px-0"
                >
                  <SelectValue placeholder="выберите процедуру" />
                </SelectTrigger>
                <SelectContent
                  className="bg-[#FDFBF7] border-[#E2D9C8] text-[#2A2724] max-h-[320px]"
                >
                  {SERVICE_CATEGORIES.map((cat) => (
                    <SelectGroup key={cat.key}>
                      <SelectLabel className="text-[#6C665E] text-[10px] tracking-[0.22em] uppercase">
                        {cat.title}
                      </SelectLabel>
                      {cat.items.map((it) => (
                        <SelectItem
                          key={it.name}
                          value={it.name}
                          data-testid={`booking-option-${it.name}`}
                        >
                          {it.name}
                          <span className="ml-2 text-[#6C665E]">
                            · {it.price.toLocaleString("ru-RU")} ₽
                          </span>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>

          <Field label="дата">
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  data-testid="booking-date-trigger"
                  className="w-full flex items-center justify-between bg-transparent border-0 border-b border-[#F5EFE6]/30 text-left h-12 text-[#F5EFE6]"
                >
                  <span className={form.date ? "" : "text-[#F5EFE6]/40"}>
                    {form.date
                      ? format(form.date, "d MMMM yyyy", { locale: ru })
                      : "выберите дату"}
                  </span>
                  <CalendarIcon size={16} strokeWidth={1.4} />
                </button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-auto p-0 bg-[#FDFBF7] border-[#E2D9C8]"
              >
                <Calendar
                  mode="single"
                  selected={form.date}
                  onSelect={(d) => update("date", d)}
                  fromDate={new Date()}
                  locale={ru}
                  data-testid="booking-calendar"
                />
              </PopoverContent>
            </Popover>
          </Field>

          <Field label="время">
            <Select value={form.time} onValueChange={(v) => update("time", v)}>
              <SelectTrigger
                data-testid="booking-select-time"
                className="bg-transparent border-0 border-b border-[#F5EFE6]/30 rounded-none focus:ring-0 text-[#F5EFE6] data-[placeholder]:text-[#F5EFE6]/40 h-12 px-0"
              >
                <SelectValue placeholder="выберите время" />
              </SelectTrigger>
              <SelectContent className="bg-[#FDFBF7] border-[#E2D9C8] text-[#2A2724]">
                {TIMES.map((t) => (
                  <SelectItem key={t} value={t} data-testid={`booking-time-${t}`}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <div className="md:col-span-2">
            <Field label="комментарий (необязательно)">
              <Textarea
                value={form.comment}
                onChange={(e) => update("comment", e.target.value)}
                placeholder="пожелания, вопросы"
                rows={3}
                data-testid="booking-input-comment"
                className="bg-transparent border-0 border-b border-[#F5EFE6]/30 rounded-none focus-visible:ring-0 focus-visible:border-[#F5EFE6] text-[#F5EFE6] placeholder:text-[#F5EFE6]/40 px-0 py-2 resize-none"
              />
            </Field>
          </div>

          <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
            <p className="text-[11px] tracking-wider text-[#F5EFE6]/50 max-w-md leading-relaxed">
              нажимая «отправить» вы соглашаетесь с обработкой персональных данных в целях обработки заявки.
            </p>
            <Button
              type="submit"
              disabled={submitting}
              data-testid="booking-submit"
              className="bg-[#F5EFE6] text-[#2A2724] hover:bg-[#C4A484] hover:text-[#2A2724] rounded-none px-10 py-6 text-[11px] tracking-[0.22em] uppercase h-auto"
            >
              {done ? (
                <span className="inline-flex items-center gap-2">
                  <Check size={14} /> отправлено
                </span>
              ) : submitting ? (
                "отправляем…"
              ) : (
                "отправить"
              )}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="kicker !text-[#F5EFE6]/60">{label}</span>
      {children}
    </label>
  );
}
