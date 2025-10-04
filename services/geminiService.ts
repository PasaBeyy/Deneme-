import { GoogleGenAI } from "@google/genai";
import type { LogEntry } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function summarizeActivity(logs: LogEntry[]): Promise<string> {
  if (!process.env.API_KEY) {
    return "API anahtarı yapılandırılmamış. Lütfen API_KEY ortam değişkenini ayarlayın.";
  }

  if (logs.length === 0) {
    return "Bu dönem için herhangi bir aktivite kaydedilmedi.";
  }

  const formattedLogs = logs.map(log => 
    `- Saat ${log.timestamp.toLocaleTimeString('tr-TR')} itibarıyla kullanıcı şu eylemi gerçekleştirdi: '${log.type}', detaylar: '${log.details}', hedef: '${log.target || 'Belirtilmemiş'}'`
  ).join('\n');

  const prompt = `
    Uzman bir İK ve üretkenlik analisti olarak, aşağıdaki çalışan aktivite günlüklerinin kısa bir özetini sunun. 
    Üretkenliğe, tamamlanan önemli görevlere ve tipik çalışma düzenlerinden olası sapmalara odaklanın.
    Kullanıcının adından bahsetmeyin. Özet, madde işaretleri halinde, profesyonel ve objektif bir tonda yazılmalıdır.

    Aktivite Günlükleri:
    ${formattedLogs}

    Özet:
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating summary with Gemini API:", error);
    return "Bir hata nedeniyle yapay zeka özeti oluşturulamadı.";
  }
}
